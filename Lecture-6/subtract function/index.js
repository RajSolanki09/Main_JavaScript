const subtract = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;

    let subtract = Number(num1) - Number(num2) - Number(num3) - Number(num4);

    document.getElementById('result').innerHTML = `subtract of (${num1} - ${num2} - ${num3} - ${num4}) = ${subtract}`;
}