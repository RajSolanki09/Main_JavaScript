const find = () => {
    let number = document.getElementById('number').value;
    if (number % 2 == 1) {
        document.getElementById('result').innerHTML = "it's an odd number";
    } else {
        document.getElementById('result').innerHTML = "it's an even number";
    }
}   