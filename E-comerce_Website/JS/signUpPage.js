import getvalue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let users = JSON.parse(localStorage.getItem('users')) || [];

let handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue(".username"),
        email: getvalue(".email"),
        password: getvalue(".password")
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "/E-comerce_Website/index.html"

}
document.querySelector("#userData").addEventListener("submit", handleData);