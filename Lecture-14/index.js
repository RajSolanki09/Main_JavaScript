const handleData = (e) => {
    e.preventDefault();

    user = {
        name: document.getElementById('username').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    if (user.name.length < 2) {
        alert('Please enter a valid username ')
        return;
    }
    if (user.number.length != 10) {
        alert('Please enter a valid 10 digit phone number ')
        return;
    }
    if (user.password.length < 6) {
        alert('Password should be at least 6 characters long')
        return;
    }


    console.log(user);
}
document.getElementById('userData').addEventListener('submit', handleData)