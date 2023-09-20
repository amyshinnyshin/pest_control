
const totalScore = document.querySelector(".total-score")
const totalCoins = document.querySelector(".total-coins")

const getCoins = document.querySelectorAll(".get-coin")


const flyPoints = document.querySelectorAll(".fly")
const cockroachPoints = document.querySelectorAll(".cockroach")

const pestRows = document.querySelectorAll(".cockroach-row, .fly-row"); 


//----------------------------Time Countdown
const timeCountdown = document.querySelector(".time-countdown");

let timeRemaining = 120;
const timerInterval = setInterval(updateTimer, 1000);

function formatTimer (time){
    return time.toString().padStart(3, '0')
}

function updateTimerDisplay() {
    const formattedTime = formatTimer(timeRemaining)
    timeCountdown.textContent = formattedTime
}


function updateTimer() {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
  }};
  

updateTimerDisplay();


// ----------------------------Total Score 
let score = 0;
function formatScore(score) {
    return score.toString().padStart(3, '0');
}

function updateScore (points) {
    score += points;
    const formattedScore = formatScore(score);
    totalScore.textContent = formattedScore;
}


//------------------------Height & Variables

const leftSectionContainer = document.querySelector(".left-section");
const pests = document.querySelector(".pest");

const heartGroup = document.getElementById("heart-group");

let hearts = document.querySelectorAll(".heart"); // Select all hearts

let pestSectionHeight = pests.clientHeight;

let gridHeight = leftSectionContainer.clientHeight;

let initialPosition = -pestSectionHeight; // Make it start above the fold




//----------Remove rows with hidden img...
const rows = document.querySelectorAll(".row");

function allImagesAreHidden(row) {
    const imgInRow = row.querySelectorAll('img'); 
    for (const img of imgInRow) {
        if (img.style.visibility !== 'hidden') {
            return false;
        }
    }
    return true;
}

function removeRowsWithHiddenImages() {
    // Adjust selectors as needed
    pestRows.forEach((row) => {
      if (allImagesAreHidden(row)) {
        row.remove();
      }
    });
  }
  



//--------Fly Scoring
flyPoints.forEach((fly, index)=>{
    fly.addEventListener("click", () => {
        const points = 1;
        updateScore(points);
        fly.style.visibility="hidden";
        removeRowsWithHiddenImages();
    })
}) 
//--------Cockroach Scoring
cockroachPoints.forEach((cockroach, index)=>{
    let clicks = 0
    cockroach.addEventListener("click", ()=>{
        if(clicks === 0){
            cockroach.src = "/lib/references/half-cockroach.png"
            const points = 1;
            updateScore(points);
            clicks++
        }else if (clicks === 1){
            const points = 1;
            updateScore(points);
            cockroach.style.visibility="hidden";
            removeRowsWithHiddenImages();
            clicks++;
        }else{
            cockroach.style.visibility="hidden";
            removeRowsWithHiddenImages();
        }
    })
})

// ----------------------------Coin Count 
let coinCount = 0;
function formatCoinCount(coinCount) {
    return coinCount.toString().padStart(3, '0');
}

function updateCoinCount (coins) {
    coinCount += coins 
    const formattedCoinCount = formatCoinCount(coinCount);
    totalCoins.textContent=formattedCoinCount;
}

getCoins.forEach((getCoin,index) => {
    getCoin.addEventListener("click",()=>{
        const coins = 1;
        updateCoinCount(coins);
        getCoin.style.visibility = "hidden";
        removeRowsWithHiddenImages();
    })
})



//---------Reset the Game
function resetGame () {
    score = 0;
    totalScore.textContent = formatScore(0);

    coinCount = 0;
    totalCoins.textContent = formatCoinCount(0);

    timeRemaining = 120;
    updateTimerDisplay();

}

//----------------------------Pest Moving
const speed = 1;
const interval = 80;

function removeHeart (){
    if (hearts.length >0) {
        const firstHeart = hearts[0];
        firstHeart.remove();
    }
};


function movePestSection() {
    initialPosition += speed;
    
     // Calculate pestSectionHeight based on current visible rows
     const visibleRows = document.querySelectorAll(".cockroach-row:not(.hidden), .fly-row:not(.hidden)");
     let height = 0;
     visibleRows.forEach((row) => {
         height += row.clientHeight;
     });
     pestSectionHeight = height;

     if (pestSectionHeight===0) {
        clearInterval(timerInterval); 
    }

    if (initialPosition + pestSectionHeight > gridHeight) {
        initialPosition = gridHeight - pestSectionHeight;
        leftSectionContainer.style.pointerEvents = "none"
        if (hearts.length > 0) {
            removeHeart(); // Remove one heart 
            clearInterval(timerInterval);
        }
    }

    pests.style.top = initialPosition + "px";


}

setInterval(movePestSection, interval)

