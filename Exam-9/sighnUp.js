let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];

const userData = (e) => {
    e.preventDefault();

    let data = {
        img: document.getElementById('img').value,
        name: document.getElementById('name').value
    };

    signUpData.push(data);
    localStorage.setItem('signUp', JSON.stringify(signUpData));

    // Optionally, you can reload the home page to immediately show the updated data.
    // location.href = './home.html';  // Refrain from using this line since redirection is not preferred.
};

// Ensure the form ID matches the one in the HTML
document.getElementById('signUpForm').addEventListener('submit', userData);
