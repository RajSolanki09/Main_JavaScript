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


    let isMatches = users.filter((ele) =>
        ele.email === user.email && ele.password === user.password
    );
    console.log(isMatches);
    alert("login successful")

}
document.querySelector("#userdata").addEventListener("submit", handleData);