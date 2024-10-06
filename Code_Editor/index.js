let awayTime = 0; // Time user spends away in seconds
let tabSwitchCount = 0; // Number of times user switches tabs
let timer; // Timer reference

document.addEventListener('DOMContentLoaded', () => {
    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Detect if DevTools is opened
    let devtools = /./;
    devtools.toString = function() {
        alert("Please don't inspect this page!");
    };
    console.log('%c ', devtools);
    
    // Disable certain keyboard shortcuts
    document.onkeydown = function (e) {
        if (e.ctrlKey && (e.key === 'i' || e.key === 'u' || e.key === 's' || e.key === 'j')) {
            return false;
        }
    };

    // Ask for permission to access the camera when the page loads
    if (confirm("Do you want to open the camera?")) {
        startCamera();
    } else {
        alert("Camera access denied.");
    }

    // Event listener for visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // User has switched to another tab
            tabSwitchCount++; // Increment tab switch count
            // Start the timer for away time
            startTimer();
        } else {
            // User has returned to the tab
            stopTimer();
            if (awayTime > 0) {
                alert(`You were away for ${awayTime} seconds. You switched tabs ${tabSwitchCount} time(s).`);
            }
            awayTime = 0; // Reset away time
        }
    });
});

async function startCamera() {
    const cameraFeed = document.getElementById('camera-feed');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraFeed.srcObject = stream;
        cameraFeed.style.display = 'block'; // Show camera feed
    } catch (error) {
        console.error("Error accessing camera: ", error);
        alert("Unable to access camera. Please check your permissions.");
    }
}

function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;

    const outputFrame = document.getElementById('output-frame');
    const fullCode = htmlCode + cssCode + jsCode;

    outputFrame.srcdoc = fullCode; // Inserts all the HTML, CSS, and JS into the iframe
}

// Timer functions to calculate away time
function startTimer() {
    timer = setInterval(() => {
        awayTime++;
    }, 1000); // Increment every second
}

function stopTimer() {
    clearInterval(timer);
}
