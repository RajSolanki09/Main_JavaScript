setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dates = date.getDate();
    let year = date.getFullYear();

    if (hours >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if (hours > 12) {
        hours -= 12;
    } else if (hours == 0) {
        hours = 12;
    }

    document.getElementById('time').innerHTML = `${hours} : ${minutes} : ${seconds} , ${ampm}`;
    document.getElementById('date').innerHTML = `${day} , ${dates},${month} , ${year}`;
}, 1000);
