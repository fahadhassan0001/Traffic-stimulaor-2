let currentLight = 0; // Start with red light
const lights = document.querySelectorAll('.light');
const startStopButton = document.getElementById('start-stop');
const statusText = document.getElementById('status');
let interval;
let isRunning = false;

// Function to change the traffic light
function changeLight() {
  // Reset all lights to inactive
  lights.forEach(light => light.classList.remove('active'));

  // Activate the current light
  lights[currentLight].classList.add('active');

  // Update to the next light in the cycle
  currentLight = (currentLight + 1) % lights.length;
}

// Function to start and stop the light cycle
function toggleCycle() {
  if (isRunning) {
    clearInterval(interval);
    statusText.textContent = 'Status: Stopped';
    startStopButton.textContent = 'Start';
  } else {
    interval = setInterval(changeLight, 3000);
    statusText.textContent = 'Status: Running';
    startStopButton.textContent = 'Stop';
  }

  isRunning = !isRunning;
}

// Event listener for start/stop button
startStopButton.addEventListener('click', toggleCycle);

// Initially, the light will be in the "stopped" state
statusText.textContent = 'Status: Stopped';
startStopButton.textContent = 'Start';

