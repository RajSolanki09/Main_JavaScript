import Navbar from "../component/header.js";
import getvalue from "../component/helper.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem('users')) || [];

let handleData = (e) => {
    e.preventDefault();

    let user = {
        username: getvalue(".username"),
        email: getvalue(".email"),
        password: getvalue(".password"),
        img: getvalue(".img") 
    };

   
    if (user.username.length > 2) {
    } else {
        alert("Please enter a proper username (more than 2 characters).");
        return; 
    }

    // Email validation
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(user.email)) {
    } else {
        alert("Please enter a valid email address.");
        return; 
    }

    // Password validation
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexPassword.test(user.password)) {
    } else {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return; 
    }
    if (user.img.length > 8) {
    } else {
        document.getElementById('img').style.border = '2px solid red';
        alert("Please enter a valid image URL ");
        return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign Up successful"); 
    window.location.href = "/Final_Exam_2/pages/login.html";
};

document.getElementById('userData').addEventListener('submit', handleData);
