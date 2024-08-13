let users = [];
const handleData = (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById('username').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        fee: document.getElementById('fee').value
    };

    if (user.name.length > 2) {
        document.getElementById('username').style.border = '2px solid green';
    } else {
        document.getElementById('username').style.border = '2px solid red';
    }

    // Indian mobile number regex
    let regexNumber = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (regexNumber.test(user.number)) {
        document.getElementById('number').style.border = '2px solid green';
    } else {
        document.getElementById('number').style.border = '2px solid red';
    }

    // Email regex
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(user.email)) {
        document.getElementById('email').style.border = '2px solid green';
    } else {
        document.getElementById('email').style.border = '2px solid red';
    }

    // Password regex
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexPassword.test(user.password)) {
        document.getElementById('password').style.border = '2px solid green';
    } else {
        document.getElementById('password').style.border = '2px solid red';
    }
    users.push(user)
    console.log(users);
                
    document.getElementById('userData').reset();
};

document.getElementById('userData').addEventListener('submit', handleData);