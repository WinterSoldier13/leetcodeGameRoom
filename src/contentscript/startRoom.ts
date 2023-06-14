document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const timeInput = document.getElementById("time") as HTMLInputElement;
    const dropdown = document.getElementById("dropdown")  as HTMLSelectElement;
    startButton ?. addEventListener('click', () => {
        const selectedValue = dropdown?.value;
        const timeInSeconds = parseInt(timeInput?.value) * 60;
        chrome.runtime.sendMessage({type : "StartContest", data: {question: selectedValue, time : timeInSeconds}});
    });

    dropdown.addEventListener("change", function() {
        var selectedOption = dropdown.options[dropdown.selectedIndex].value;
        var timeValue = 0;

        if (selectedOption === "0") {
            timeValue = 30; // Set time value for option 0 (4 Easy)
        } else if (selectedOption === "1") {
            timeValue = 45; // Set time value for option 1 (2 Easy 2 Medium)
        } else if (selectedOption === "2") {
            timeValue = 60; // Set time value for option 2 (4 Medium)
        } else if (selectedOption === "3") {
            timeValue = 90; // Set time value for option 3 (2 Medium 2 Hard)
        } else if (selectedOption === "4") {
            timeValue = 120; // Set time value for option 4 (4 Hard)
        }
        timeInput.value = timeValue.toString(); // Update the time input value
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
