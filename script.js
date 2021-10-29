let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer (seconds) {
   const now = Date.now();
   const then = now + seconds * 1000;
   //console.log({now,then});
   displayTimeLeft(seconds);

   countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop intervals
    if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
    //display countdown
    displayTimeLeft(secondsLeft);
   }, 1000);
}

function displayTimeLeft(seconds) {
    //console.log(seconds);
    
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;

}