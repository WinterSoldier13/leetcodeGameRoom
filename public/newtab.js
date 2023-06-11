document.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");

    option1?.addEventListener('click', () => {
        var websiteFrame = document.getElementById('websiteFrame');
        websiteFrame.src = 'https://www.leetcode.com';
    })

    var durationInSeconds = 60; // Timer duration in seconds
  
    // startTimer();
  
    function startTimer() {
      updateTimer();
  
      var timerInterval = setInterval(function () {
        durationInSeconds--;
  
        if (durationInSeconds <= 0) {
          clearInterval(timerInterval);
        }
  
        updateTimer();
      }, 1000);
    }
  
    function updateTimer() {
      timerElement.textContent = formatTime(durationInSeconds);
    }
  
    function formatTime(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = timeInSeconds % 60;
  
      return (
        (minutes < 10 ? '0' : '') +
        minutes +
        ':' +
        (seconds < 10 ? '0' : '') +
        seconds
      );
    }
  
    function openWebsite(url) {
        var websiteFrame = document.getElementById('websiteFrame');
        websiteFrame.src = url;
      }
      
  });
  
  function openWebsite(url) {
    var websiteFrame = document.getElementById('websiteFrame');
    websiteFrame.src = url;
  }
  