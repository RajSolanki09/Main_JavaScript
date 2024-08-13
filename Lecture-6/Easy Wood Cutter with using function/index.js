const find = () => {
    let number = document.getElementById('number').value;
    if (number % 3 == 0) {
        document.getElementById('result').innerHTML = "Yes";
    } else {
        document.getElementById('result').innerHTML = "No";
    }
}   