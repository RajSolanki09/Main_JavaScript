const scriptURL = 'https://script.google.com/macros/s/AKfycbwuE7S-gW3jPWqt5Chij3RCl7Ik2tvwFHPMDtKxrfKffL3W_oZwQ4QCxLVEOPB1yN-cuQ/exec';

const form = document.forms['Sheet1']; // Assuming your form's name is 'contact-form'

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form) // Send form data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Form submission failed.');
        }
        alert("Thank you! Your form was submitted successfully.");
    })
    .then(() => {
        window.location.reload(); // Optionally reload the page after submission    
    })
    .catch(error => {
        console.error('Error!', error.message); // Correct error handling
        alert('Form submission failed. Please try again.');
    });
});
