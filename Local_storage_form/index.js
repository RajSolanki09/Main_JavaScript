let form = document.querySelector("form");
let main = document.querySelector(".main");
let cAll = document.querySelector("#cAll")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let checkStatus = 0;

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for (let v of userData) {
        if (v.email === email || v.phone === phone) {
            alert("email ,Phone already exista!");
            checkStatus = 1;
            break;
        }
    }
    if (checkStatus === 1) {
        alert("Email,Phone already exista!");
    } else {
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
    userData.forEach((elements, index) => {
        finalData += ` <div class="items">
        <span onclick="removeData(${index})">&times;</span>
        <h4>Name</h4>
        <div>${elements.name}</div>
        <h4>Email</h4>
        <div>${elements.email}</div>
        <h4>Phone</h4>
        <div>${elements.phone}</div>
      </div>`;
    });
    main.innerHTML = finalData;
};

let removeData = (index) => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    uimaker();
};
cAll.addEventListener("click", () => {
    localStorage.clear("userDetails");
    uimaker();
})

uimaker();
