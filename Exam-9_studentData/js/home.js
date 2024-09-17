<<<<<<< HEAD
import { createTag } from "../components/helper.js";
import Navbar from "../components/navbar.js";
import getvalue from "../components/helper.js"; 

document.getElementById("navbar").innerHTML = Navbar();

let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

const mapper = (data) => {
    document.getElementById("studentList").innerHTML = ""; 
    data.forEach((ele) => {
        let studentName = createTag("p", ele.studentname);
        let studId = createTag("p", ele.studId);
        let fees = createTag("h2", ele.fees);
        let course = createTag("p", ele.course);
        let div = document.createElement("div");

        div.append(studentName, studId, fees, course);
        document.getElementById("studentList").append(div);
    });
};

mapper(studentData);

const handleSort = (orderBy) => {
    let sortedDetails = [...studentData].sort((a, b) => orderBy === "lth" ? a.fees - b.fees : b.fees - a.fees);
    mapper(sortedDetails);
};

const handleCourse = (category) => {
    let filteredStudents = studentData.filter((ele) => ele.course === category);
    mapper(filteredStudents);
};

const search = (e) => {
    e.preventDefault(); 
    let searchValue = document.getElementById("search").value; 
    if (searchValue.trim() === "") {
        mapper(studentData);
        return;
    }
    let filteredStudents = studentData.filter((ele) => ele.studentname.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(filteredStudents); 
};

document.getElementById("lth")?.addEventListener("click", () => handleSort("lth"));
document.getElementById("htl")?.addEventListener("click", () => handleSort("htl"));

document.getElementById("Frontend")?.addEventListener("click", () => handleCourse("Frontend"));
document.getElementById("Backend")?.addEventListener("click", () => handleCourse("Backend"));
document.getElementById("FullStack")?.addEventListener("click", () => handleCourse("FullStack"));

document.getElementById("searching")?.addEventListener("submit", search);
=======
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();
let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

const mapper = (data) => {
    document.getElementById("studentList").innerHTML = "";
    data.forEach((ele) => {
        let studentName = createTag("p", ele.studentname);
        let studId = createTag("p", ele.studId);
        let fees = createTag("h2", ele.fees);
        let course = createTag("p", ele.course);
        let div = document.createElement("div");

        div.append(studentName, studId, fees, course);
        document.getElementById("studentList").append(div);
    });
};

mapper(studentData);

const handleSort = (orderBy) => {
    let sortedDetails = [...studentData].sort((a, b) => orderBy === "lth" ? a.fees - b.fees : b.fees - a.fees);
    mapper(sortedDetails);
};

const handleCourse = (category) => {
    let filteredStudents = studentData.filter((ele) => ele.course === category);
    mapper(filteredStudents);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

document.getElementById("Frontend").addEventListener("click", () => handleCourse("Frontend"));
document.getElementById("Backend").addEventListener("click", () => handleCourse("Backend"));
document.getElementById("FullStack").addEventListener("click", () => handleCourse("FullStack"));

const search = (e) => {
    e.preventDefault();
    let searchValue = getvalue("#search");
    let filteredStudents = studentData.filter((ele) => ele.studentname.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(filteredStudents);
};
document.getElementById("searching").addEventListener("submit", search);
>>>>>>> c1881dffd2af46068d835ab4cf49bcdbb1fce34a
