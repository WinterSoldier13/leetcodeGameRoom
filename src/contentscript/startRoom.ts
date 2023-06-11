const startButton = document.getElementById('start_button');
var timerElement;

const startTheRoom = () => {
    var durationInSeconds = 10;
    // Change this value to set the desired duration in seconds

    // Update the timer element with the initial value
    timerElement !.textContent = formatTime(durationInSeconds);

    // Start the timer
    const timer = setInterval(function () {
        durationInSeconds--;

        // Update the timer element with the remaining time
        timerElement !.textContent = formatTime(durationInSeconds);

        // Check if the timer has reached zero
        if (durationInSeconds <= 0) { // Display an alert when the timer runs out
            alert('Timer has finished!');

            // Reset the timer element and enable the start button
            timerElement !.textContent = '';
            durationInSeconds = 100;
        }
    }, 1000); // Update the timer every second

    
}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start_button');
    timerElement = document.getElementById('timer_info');
    startButton ?. addEventListener('click', () => {
        chrome.tabs.create({ url: 'newtab.html' });
    });
});

// Function to format the time in MM:SS format
function formatTime(timeInSeconds : any) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;

    return((minutes < 10 ? '0' : '') + minutes + ':' + (
    seconds < 10 ? '0' : ''
) + seconds);
}
