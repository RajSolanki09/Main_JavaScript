let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];

const userData = (e) => {
    e.preventDefault();

    let data = {
        img: document.getElementById('img').value,
        name: document.getElementById('name').value
    };

    signUpData.push(data);
    localStorage.setItem('signUp', JSON.stringify(signUpData));
};

document.getElementById('signUpForm').addEventListener('submit', userData);
