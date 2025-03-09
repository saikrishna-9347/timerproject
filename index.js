let timer;
let timeLeft = 25 * 60; // Default 25 minutes
let isRunning = false;

// Getting HTML Elements
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const shortBreakBtn = document.getElementById("shortBreak");
const longBreakBtn = document.getElementById("longBreak");

// Function to update the timer display
function updateTimerDisplay() {
    if (!timerDisplay) {
        console.error("Element with ID 'timer' not found!");
        return;
    }
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

// Start Timer Function
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Stop Timer Function
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset Timer Function
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// Short Break Function (5 min)
function setShortBreak() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 5 * 60;
    updateTimerDisplay();
}

// Long Break Function (15 min)
function setLongBreak() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 15 * 60;
    updateTimerDisplay();
}

// Add Event Listeners
if (startBtn) startBtn.addEventListener("click", startTimer);
if (stopBtn) stopBtn.addEventListener("click", stopTimer);
if (resetBtn) resetBtn.addEventListener("click", resetTimer);
if (shortBreakBtn) shortBreakBtn.addEventListener("click", setShortBreak);
if (longBreakBtn) longBreakBtn.addEventListener("click", setLongBreak);

// Initial Timer Display
updateTimerDisplay();
