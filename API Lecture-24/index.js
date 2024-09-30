import studentAPI from "./API.js";

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        course: document.getElementById('course').value,
        dob: document.getElementById('dob').value, // Changed to 'dob' for date of birth
        address: document.getElementById('address').value // Added address field
    };

    await studentAPI.post(student);
    getStudent(); // Refresh the student list
};

// Create UI elements for each student
const uimaker = (students) => {
    const listElement = document.getElementById('list');
    listElement.innerHTML = ''; // Clear previous entries

    // Use map to create student cards and append them to the list
    students.map((ele) => {
        const div = document.createElement('div');
        div.className = 'student-card';

        const name = document.createElement('h4');
        name.innerHTML = `Name: ${ele.name}`;

        const email = document.createElement('p');
        email.innerHTML = `Email: ${ele.email}`;

        const number = document.createElement('p');
        number.innerHTML = `Number: ${ele.number}`;

        const course = document.createElement('p');
        course.innerHTML = `Course: ${ele.course}`;

        const address = document.createElement('p');
        address.innerHTML = `Address: ${ele.address}`; // Added address field

        const btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.className = 'delete-btn';
        
        btn.addEventListener('click', async () => {
            await studentAPI.delete(ele.id); 
            getStudent(); // Refresh the student list after deletion
        });

        div.append(name, email, number, course, address, btn); // Append address and dob
        listElement.append(div);
    });
};

// Fetch students from the API and display them
const getStudent = async () => {
    const students = await studentAPI.get(); 
    uimaker(students); 
};

// Initial fetch to display students
getStudent();

// Attach event listener to form submission
document.getElementById('form').addEventListener('submit', handleSubmit);
