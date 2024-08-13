const multi = () => {
    let num = document.getElementById('num').value;
    let multi = num * 50;
    document.getElementById('result').innerHTML = `${num} * 50 = ${multi}`;
}