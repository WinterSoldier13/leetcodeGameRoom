// contentScript.js

function createClock(remainingTimeSeconds) {
    const clockElement = document.createElement('div');
    clockElement.style.position = 'fixed';
    clockElement.style.top = '0';
    clockElement.style.left = '50%';
    clockElement.style.transform = 'translateX(-50%)';
    clockElement.style.backgroundColor = 'white';
    clockElement.style.padding = '10px';
    clockElement.style.fontFamily = 'Arial, sans-serif';
    clockElement.style.fontSize = '18px';
    clockElement.style.zIndex = '9999'; // Set a high z-index value
  
    const updateClock = () => {
      const minutes = Math.floor(remainingTimeSeconds / 60);
      const seconds = remainingTimeSeconds % 60;
      clockElement.textContent = `Remaining Time: ${minutes}m ${seconds}s`;
  
      if (remainingTimeSeconds <= 0) {
        clearInterval(timer);
        clockElement.textContent = 'Time is up!';
      }
  
      remainingTimeSeconds--;
    };
  
    updateClock();
    const timer = setInterval(updateClock, 1000);
  
    document.body.appendChild(clockElement);
  }
  
  createClock();
