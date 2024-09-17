import getvalue from "../components/helper.js";
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

const Studentsubmit = (e) => {
    e.preventDefault();

    let student = {
        studentname: getvalue(".name"),
        course: getvalue(".course"),
        fees: getvalue(".fees"),
        studId: getvalue(".studId"),
    };

    studentData.push(student);
    console.log(studentData);

    localStorage.setItem("studentData", JSON.stringify(studentData));
};

document.getElementById("studentDatas").addEventListener("submit", Studentsubmit);

