const timeCountdown = document.querySelector(".time-countdown");

let timeRemaining = 120;
const timerInterval = setInterval(updateTimer, 1000);

function updateTimerDisplay() {
    timeCountdown.textContent = timeRemaining;
}

function updateTimer() {
    if (timeRemaining>0){
        timeRemaining--
        updateTimerDisplay();
    }else{
        clearInterval(timerInterval);
    }
}
updateTimerDisplay();
