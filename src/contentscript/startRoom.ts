const startTheRoom = () => {
    alert("Starting the room!!!");
}


document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('start_button');
    startButton ?. addEventListener('click', function () {
        alert("starting the room!!!");
    });
});
