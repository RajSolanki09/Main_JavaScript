// Facebook
let facebook = 0;
const maxCount1 = document.getElementById('facebook').innerHTML;
setTimeout(() => {
    const id1 = setInterval(() => {
        facebook += 1;
        document.getElementById('facebook').innerHTML = facebook;
        if (facebook == Number(maxCount1)) {
            clearInterval(id1);
        }
    }, 45);
}, 500);

// Twitter
let twitter = 0;
const maxCount2 = document.getElementById('twitter').innerHTML;
setTimeout(() => {
    const id2 = setInterval(() => {
        twitter += 1;
        document.getElementById('twitter').innerHTML = twitter;
        if (twitter == Number(maxCount2)) {
            clearInterval(id2);
        }
    }, 20);
}, 1800);

// Instagram
let instagram = 0;
const maxCount3 = document.getElementById('instagram').innerHTML;
setTimeout(() => {
    const id3 = setInterval(() => {
        instagram += 1;
        document.getElementById('instagram').innerHTML = instagram;
        if (instagram == Number(maxCount3)) {
            clearInterval(id3);
        }
    }, 30);
}, 2800);

// LinkedIn
let linkedIn = 0;
const maxCount4 = document.getElementById('linkedIn').innerHTML;
setTimeout(() => {
    const id4 = setInterval(() => {
        linkedIn += 1;
        document.getElementById('linkedIn').innerHTML = linkedIn;
        if (linkedIn == Number(maxCount4)) {
            clearInterval(id4);
        }
    }, 10);
}, 3600);