// counter 1
let counter1 = 0;
const maxCount1 = document.getElementById('counter1').innerHTML;
setTimeout(() => {
    const id1 = setInterval(() => {
        counter1 += 1;
        document.getElementById('counter1').innerHTML = counter1;
        if (counter1 == Number(maxCount1)) {
            clearInterval(id1);
        }
    }, 45);
}, 500);

// Counter 2
let counter2 = 0;
const maxCount2 = document.getElementById('counter2').innerHTML;
setTimeout(() => {
    const id2 = setInterval(() => {
        counter2 += 1;
        document.getElementById('counter2').innerHTML = counter2;
        if (counter2 == Number(maxCount2)) {
            clearInterval(id2);
        }
    }, 20);
}, 1800);

// Counter 3
let counter3 = 0;
const maxCount3 = document.getElementById('counter3').innerHTML;
setTimeout(() => {
    const id3 = setInterval(() => {
        counter3 += 1;
        document.getElementById('counter3').innerHTML = counter3;
        if (counter3 == Number(maxCount3)) {
            clearInterval(id3);
        }
    }, 30);
}, 2800);

// Counter 4
let counter4 = 0;
const maxCount4 = document.getElementById('counter4').innerHTML;
setTimeout(() => {
    const id4 = setInterval(() => {
        counter4 += 1;
        document.getElementById('counter4').innerHTML = counter4;
        if (counter4 == Number(maxCount4)) {
            clearInterval(id4);
        }
    }, 10);
}, 3600);