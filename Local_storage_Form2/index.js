let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let checkStatus = 0;

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for (let v of userData) {
        if (v.email === email || v.phone === phone) {
            alert("Email or Phone already exists!");
            checkStatus = 1;
            break;
        }
    }
    if (checkStatus === 0) {
        userData.push({
            'name': name,
            'email': email,
            'phone': phone
        });
        localStorage.setItem("userDetails", JSON.stringify(userData));
    }
    e.target.reset();
    uimaker();
});

let uimaker = () => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    console.log(userData);
    let finalData = "";
    for (let i = 0; i < userData.length; i++) {
        let elements = userData[i];
        finalData += ` <div class="items">
            <span onclick="removeData(${i})">&times;</span>
            <h4>Name</h4>
            <div>${elements.name}</div>
            <h4>Email</h4>
            <div>${elements.email}</div>
            <h4>Phone</h4>
            <div>${elements.phone}</div>
        </div>`;
    }
    main.innerHTML = finalData;
};

let removeData = (index) => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    uimaker();
};


document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("userDetails");
    uimaker();
});


uimaker();