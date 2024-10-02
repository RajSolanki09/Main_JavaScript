import DataAPI from "../api.js";
import { navbar } from "./header.js";

document.getElementById('navbar').innerHTML = navbar()

const handleQuetion = async (e) => {

    e.preventDefault();

    const data = {
        Que: document.getElementById('Que').value,
        Op1: document.getElementById('op1').value,
        Op2: document.getElementById('op2').value,
        Op3: document.getElementById('op3').value,
        Op4: document.getElementById('op4').value,
        Ans: document.getElementById('ans').value,

    };
    await DataAPI.post(data);
}


document.getElementById('form').addEventListener('submit', handleQuetion);
