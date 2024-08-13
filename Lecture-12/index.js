let users = []
let totalSalary = Number(0);
let totalEmployees = Number(0);

const uiMaker = () => {
    document.getElementById('tbody').innerHTML = ""
    document.getElementById('totalSalary').innerHTML = `totalSalary: ${totalSalary}`;
    document.getElementById('totalEmployees').innerHTML = `totalEmployees: ${users.length}`

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = users[i].s_no;
        let td2 = document.createElement('td');
        td2.innerHTML = users[i].name;
        let td3 = document.createElement('td');
        td3.innerHTML = users[i].email;
        let td4 = document.createElement('td');
        td4.innerHTML = users[i].department;
        let td5 = document.createElement('td');
        td5.innerHTML = users[i].expireance;
        let td6 = document.createElement('td');
        td6.innerHTML = users[i].level;
        let td7 = document.createElement('td');
        td7.innerHTML = users[i].salary;
        let td8 = document.createElement('td');
        td8.innerHTML = "Remove";
        td8.addEventListener('click', () => handleDelete(i, users[i].salary))

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.getElementById('tbody').append(tr)

    }
}

const handleDelete = (index, salary) => {
    users.splice(index, 1);
    totalSalary -= salary;
    console.log(totalSalary);
    uiMaker();
}

const fireAllEmployee = () => {
    users = [];
    document.getElementById("tbody").innerHTML = "";
    totalSalary = 0;
    uiMaker();
}

const data = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let expireance = document.getElementById("expireance").value
    let s_no
    let level
    var salary = document.getElementById("salary").value

    if (expireance <= 5 && expireance >= 0) {
        level = "Junior"
    } else {
        level = "Senior"
    }

    let user = {
        s_no: users.length + 1,
        name: name,
        email: email,
        department: department,
        expireance: expireance,
        level: level,
        salary: salary,
    }

    users.push(user);
    uiMaker();

    totalSalary += Number(salary);

    totalEmployees = Number(users.length);
    document.getElementById('totalEmployees').innerHTML = `totalEmployees: ${users.length}`;

}

document.getElementById("userData").addEventListener("submit", data);
document.getElementById('fireAllEmployee').addEventListener("click", fireAllEmployee);