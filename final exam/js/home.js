import { navbar } from "./header.js";

document.getElementById('navbar').innerHTML = navbar()

const uiMaker = (Datas) => {
    const listElement = document.getElementById('list').innerHTML = ""

    Datas.map((ele) => {

        const div = document.createElement('div');
        let Que = document.createElement('p');
        Que.innerHTML = `Quetion: ${ele.Que}`;

        let op1 = document.createElement('p');
        op1.innerHTML = `Option:A: ${ele.op1}`;

        let op2 = document.createElement('p');
        op2.innerHTML = `Number: ${ele.op2}`;

        let op3 = document.createElement('p');
        op3.innerHTML = `Course: ${ele.op3}`;

        let op4 = document.createElement('p');
        op4.innerHTML = `Address: ${ele.op4}`;

        let ans = document.createElement('ans');
        ans.innerHTML = `Address: ${ele.ans}`;

        div.append(Que,op1,op2,op3,op4,ans);
        listElement.append(div);
    });

}

