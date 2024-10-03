import Navbar from "../component/header.js";
import getvalue from "../component/helper.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem('users')) || [];

let handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getvalue(".email"),
        password: getvalue(".password")
    };

    let isMatches = users.filter(
        (ele) => ele.email === user.email && ele.password === user.password
    );

    if (isMatches.length > 0) {
        alert("Login successful");
        window.location.href = "/Final_Exam_2/pages/add.html";
        localStorage.setItem("username", isMatches[0].username)
        localStorage.setItem("isLogin", true);
    } else {
        alert("Invalid email or password");
    }
};

document.querySelector("#userData").addEventListener("submit", handleData);
