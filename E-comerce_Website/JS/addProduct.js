import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar

let isLogin = localStorage.getItem("isLogin") || false;

if (loginPage) {
    window.location.href = "/E-comerce_Website/Pages/loginPage.html";
}