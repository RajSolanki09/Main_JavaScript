let users = [];

const uimaker = () => {
  document.getElementById("tbody").innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].name;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].std;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].totalMarks;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].percentage;
    let td5 = document.createElement("td");
    td5.innerHTML = users[i].grade;

    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr);
  }
};

const gradeCalculator = (percentage) => {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const marksheet = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let std = document.getElementById("std").value;
  let phy = parseInt(document.getElementById("phy").value);
  let chem = parseInt(document.getElementById("chem").value);
  let bio = parseInt(document.getElementById("bio").value);
  let eng = parseInt(document.getElementById("eng").value);
  let com = parseInt(document.getElementById("com").value);

  let totalMarks = phy + chem + bio + eng + com;
  let percentage = (totalMarks / 500) * 100;
  let grade = gradeCalculator(percentage);

  let user = {
    name: name,
    std: std,
    totalMarks: totalMarks,
    percentage: percentage,
    grade: grade,
  };

  users.push(user);
  uimaker();

  document.getElementById("mark").reset();
};

document.getElementById("mark").addEventListener("submit", marksheet);
