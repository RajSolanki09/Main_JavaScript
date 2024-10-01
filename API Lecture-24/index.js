import studentAPI from "./API.js";

let id = -1;

const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        course: document.getElementById('course').value,
        address: document.getElementById('address').value
    };

    if (id === -1) {
        await studentAPI.post(student); 
    } else {
        await studentAPI.patch(id, student);
        id = -1; 
        document.getElementById('type').textContent = 'Submit';
    }

    window.location.reload(); 
};

const uimaker = (students) => {
    const listElement = document.getElementById('list');
    listElement.innerHTML = ''; 

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
        address.innerHTML = `Address: ${ele.address}`; 

        const btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.className = 'delete-btn';

        const btn2 = document.createElement('button');
        btn2.innerHTML = 'Update';
        btn2.addEventListener('click', () => handleUpdate(ele));

        btn.addEventListener('click', async () => {
            await studentAPI.delete(ele.id);
            window.location.reload(); 
        });

        div.append(name, email, number, course, address, btn, btn2); 
        listElement.append(div);
    });
};

const handleUpdate = (ele) => {
    document.getElementById('name').value = ele.name;
    document.getElementById('email').value = ele.email;
    document.getElementById('number').value = ele.number;
    document.getElementById('course').value = ele.course;
    document.getElementById('address').value = ele.address;
    document.getElementById('type').textContent = 'Update'; 
    id = ele.id;
};

const getStudent = async () => {
    const students = await studentAPI.get();
    uimaker(students);
};

getStudent();

document.getElementById('form').addEventListener('submit', handleSubmit);
