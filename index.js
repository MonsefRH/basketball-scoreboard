let home_score= document.getElementById("home-actually-score");
let guest_score= document.getElementById("guest-actually-score");

function plusOne(){
    if(currentTime < totalTime & currentTime > 0){
        home_score.innerHTML = parseInt(home_score.innerHTML) + 1;
    } 
    
}
function plusTwo(){
    if(currentTime < totalTime & currentTime > 0){
        home_score.innerHTML = parseInt(home_score.innerHTML) + 2;
    } 
    
}
function plusTree(){
    if(currentTime < totalTime & currentTime > 0){
        home_score.innerHTML = parseInt(home_score.innerHTML) + 3;
    } 
    
}
function plusOneGuest(){
    if(currentTime < totalTime & currentTime > 0){
        guest_score.innerHTML = parseInt(guest_score.innerHTML) + 1;
    } 
    
}
function plusTwoGuest(){
    if(currentTime < totalTime & currentTime > 0){
        guest_score.innerHTML = parseInt(guest_score.innerHTML) + 2;
    } 
}
function plusTreeGuest(){
    if(currentTime < totalTime & currentTime > 0){
        guest_score.innerHTML = parseInt(guest_score.innerHTML) + 3;
    } 
}

function resetScores() {
    home_score.innerHTML = 0;
    guest_score.innerHTML = 0;
    resetTimer();
}





let timerElement = document.getElementById('timer');
let totalTime = 10 ; // 12 minutes in seconds
let currentTime = totalTime;
let timerInterval = null;

function updateTimerDisplay() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            updateTimerDisplay();
        } else {
            stopTimer(); // Stop the timer when it reaches 0
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    if(currentTime ==0 ){
        declareWinner();

    }
}

function resetTimer() {
    currentTime = totalTime;
    stopTimer();
    currentTime = totalTime;
    updateTimerDisplay();
}
function declareWinner() {
    let homeScore = parseInt(home_score.innerHTML);
    let guestScore = parseInt(guest_score.innerHTML);
    let winnerMessage = '';

    if (homeScore > guestScore) {
        winnerMessage = "The Home team wins!";
    } else if (guestScore > homeScore) {
        winnerMessage = "The Guest team wins!";
    } else {
        winnerMessage = "It's a tie!";
    }

    document.getElementById('winnerMessage').textContent = winnerMessage;
    document.getElementById('winnerModal').style.display = "block";
}

function closeModal() {
    document.getElementById('winnerModal').style.display = "none";
    updateTimerDisplay();
    resetScores();
}


// Initialize the display
updateTimerDisplay();


