import DataAPI from "../api.js";
import { navbar } from "./header.js";

document.getElementById('navbar').innerHTML = navbar();

let right = 0;
let wrong = 0;

const uiMaker = async () => {
    let data = await DataAPI.get();

    data.map((ele) => {
        const div = document.createElement('div');
        let Que = document.createElement('h3');
        Que.innerHTML = `Question: ${ele.Que}`;

        let op1 = document.createElement('p');
        op1.innerHTML = `Option: A : ${ele.Op1}`;

        let op2 = document.createElement('p');
        op2.innerHTML = `Option: B : ${ele.Op2}`;

        let op3 = document.createElement('p');
        op3.innerHTML = `Option: C : ${ele.Op3}`;

        let op4 = document.createElement('p');
        op4.innerHTML = `Option: D : ${ele.Op4}`;

        op1.addEventListener('click', () => handleOptionClick(op1, ele.Ans));
        op2.addEventListener('click', () => handleOptionClick(op2, ele.Ans));
        op3.addEventListener('click', () => handleOptionClick(op3, ele.Ans));
        op4.addEventListener('click', () => handleOptionClick(op4, ele.Ans));

        div.append(Que, op1, op2, op3, op4);
        document.getElementById("list").append(div);
    });
};

const handleOptionClick = (selected, correct) => {
    if (selected.style.backgroundColor === "green" || selected.style.backgroundColor === "red") {
        return;
    }
    
    if (selected.innerHTML.includes(correct)) {
        selected.style.backgroundColor = 'green';
        selected.style.color = 'white';
        right++;
    } else {
        selected.style.backgroundColor = 'red';
        selected.style.color = 'white';
        wrong++;
    }
};

document.getElementById('resultBtn').addEventListener('click', () => {
    alert(`Correct Answers: ${right}\nIncorrect Answers: ${wrong}`);
});

uiMaker();
