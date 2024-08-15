setInterval(function () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm;

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

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    document.getElementById('time').innerHTML = `${hours} : ${minutes} : ${seconds} , ${ampm}`;
    document.getElementById('date').innerHTML = `${day} : ${date},${month} : ${year}`;
}, 1000);
