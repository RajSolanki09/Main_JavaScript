let users = [];
let totalFee = 0;

const uimaker = () => {

    let sales = {
        FullStack: {
            count: 0,
            fee: 0
        },
        FrontEnd: {
            count: 0,
            fee: 0
        },
        BackEnd: {
            count: 0,
            fee: 0
        },
        pythonDeveloper: {
            count: 0,
            fee: 0
        },
    }



    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = users[i].name;
        let td2 = document.createElement('td');
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement('td');
        td3.innerHTML = users[i].number;
        let td4 = document.createElement('td');
        td4.innerHTML = users[i].course;
        let td5 = document.createElement('td');
        td5.innerHTML = "$" + users[i].fee;

        let td6 = document.createElement("td");
        td6.innerHTML = "delete";
        td6.addEventListener("click", handleDelete);
        document.getElementById("tbody").append(tr);
        tr.append(td1, td2, td3, td4, td5, td6);

        console.log("users[i].course", users[i].course);

        sales[users[i].course].fee += users[i].fee;
        sales[users[i].course].count += 1
    }
    document.getElementById("tbody").innerHTML = "";
        
    

    handleSalesData("FullStack", sales.FullStack.count, sales.FullStack.fee)
    handleSalesData("FrontEnd", sales.FrontEnd.count, sales.FrontEnd.fee)

}

const handleSalesData = (course, count, fee) => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = course
    td2.innerHTML = count
    td3.innerHTML = fee
    tr.append(td1, td2, td3);
    document.getElementById("Summary").append(tr)

}


const handleDelete = (index, fee) => {
    users.splice(index, 1);
    totalFee -= fee;
    uimaker();
}

const data = (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        grid: document.getElementById("grid").value,
        number: document.getElementById("number").value,
        course: document.getElementById("course").value,
        fee: parseInt(document.getElementById("fee").value)
    }


    if (user.name.length <= 2) {
        alert("Name must be 2 characters long")
        return
    }
    if (user.grid.length != 4) {
        alert("Grid must be 4 characters long")
        return
    }
    if (user.number.length != 10) {
        alert("Number must be 10 characters long")
        return
    }


    totalFee += user.fee;
    users.push(user);
    uimaker();

}

document.getElementById("userData").addEventListener("submit", data);
