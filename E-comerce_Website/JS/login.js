import getvalue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

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
        window.location.href = "/E-comerce_Website/index.html";
        localStorage.setItem("username", isMatches[0].username)
        localStorage.setItem("isLogin", true);
    } else {
        alert("Invalid email or password");
    }
};

document.querySelector("#userData").addEventListener("submit", handleData);
