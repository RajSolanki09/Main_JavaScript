import getvalue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

let users = JSON.parse(localStorage.getItem('users')) || [];
document.getElementById("navbar").innerHTML = Navbar();
let handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue(".username"),
        email: getvalue(".email"),
        password: getvalue(".password")
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "http://127.0.0.1:5500/E-comerce_Website/index.html"

    let isMatches = users.filter((ele)=>{
        
    })

}
document.querySelector("#userdata").addEventListener("submit", handleData);