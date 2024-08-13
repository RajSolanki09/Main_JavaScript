const name_age = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let typeofname = typeof name
    let typeofage = typeof age
    document.getElementById('result').innerHTML = `Name = ${name} and their datatype is ${typeofname} <br>  Age = ${age} and their datatype is ${typeofage}`;
}   