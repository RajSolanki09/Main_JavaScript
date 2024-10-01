import DataAPI from "../api.js";
import { navbar } from "./header.js";

document.getElementById('navbar').innerHTML = navbar();

const uiMaker = async () => {
    let data = await DataAPI.get();

    data.map((ele) => {
        const div = document.createElement('div');
        let Que = document.createElement('h3');
        Que.innerHTML = `Question: ${ele.Que}`;

        let op1 = document.createElement('p');
        op1.innerHTML = `Option: A : ${ele.Op1}`;

        let op2 = document.createElement('p');
        op2.innerHTML =` Option: B : ${ele.Op2}`;

        let op3 = document.createElement('p');
        op3.innerHTML = `Option: C : ${ele.Op3}`;

        let op4 = document.createElement('p');
        op4.innerHTML = `Option: D : ${ele.Op4}`;

        div.append(Que, op1, op2, op3, op4);
        document.getElementById("list").append(div);

        
        const Ans = ele.Ans; 

        if (Ans === ele.Op1 || Ans === ele.Op2 || Ans === ele.Op3 || Ans === ele.Op4) {
            div.classList.add('green'); 
        } else {
            div.classList.add('red'); 
        }
    });
};

uiMaker();
