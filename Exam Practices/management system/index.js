let employees = [];

const UiMaker = () => {
    console.log("Employees data:", employees);
    const tbody = document.getElementById('employeetbody');
    tbody.innerHTML = "";
    employees.map((element, index) => {
        console.log("Employee:", element);
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = element.name;
        let td2 = document.createElement('td');
        td2.textContent = element.job;
        let td3 = document.createElement('td');
        td3.textContent = element.department;
        let td4 = document.createElement('td');
        td4.textContent = element.salary;
        let td5 = document.createElement('td');
        td5.textContent = element.email;
        let td6 = document.createElement('td');
        td6.textContent = element.experience;
        let td7 = document.createElement('td');
        td7.textContent = element.experience > 5 ? 'senior' : 'junior';
        let td8 = document.createElement('td');
        td8.textContent = "Delete";
        td8.addEventListener("click", () => deleteRow(index));
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
    });
    count()
    document.getElementById('totalSalary').textContent = getTotalSalary();

};

const handleEmployeeData = (ele) => {
    ele.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        job: document.getElementById('job').value,
        department: document.getElementById('department').value,
        salary: document.getElementById('salary').value,
        email: document.getElementById('email').value,
        experience: document.getElementById('experience').value
    };
    employees.push(data);
    UiMaker();
};

const deleteAllData = () => {
    document.getElementById('employeetbody').innerHTML = "";
    employees = [];

};

const deleteRow = (index) => {
    employees.splice(index, 1);
    console.log("Employee deleted at index", index, ". Updated employee list:", employees);
    UiMaker();
};

const count = () => {
    document.getElementById('employeeCount').textContent = employees.length;
};

const getTotalSalary = () => {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary = totalSalary + Number(employees[i].salary);
    }
    return totalSalary + '';
};

document.getElementById('deleteAll').addEventListener("click", deleteAllData);
document.getElementById('employeeData').addEventListener("submit", handleEmployeeData);