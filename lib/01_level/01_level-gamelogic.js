const totalScore = document.querySelector(".total-score")
const totalCoins = document.querySelector(".total-coins")

const getCoins = document.querySelectorAll(".get-coin")


const flyPoints = document.querySelectorAll(".fly")
const cockroachPoints = document.querySelectorAll(".cockroach")

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
//--------Fly Scoring
flyPoints.forEach((fly, index)=>{
    fly.addEventListener("click", () => {
        const points = 1;
        updateScore(points);
        fly.style.visibility="hidden";
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
            clicks++;
        }else{
            cockroach.style.visibility="hidden";
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
    })
})

//---------------------------Find Hidden Divs






//----------------------------Pest Moving
const leftSectionContainer = document.querySelector(".left-section");
const pests = document.querySelector(".pest");

const heartGroup = document.getElementById("heart-group");

let hearts = document.querySelectorAll(".heart"); // Select all hearts

function removeHeart (){
    if (hearts.length >0) {
        const firstHeart = hearts[0];
        firstHeart.remove();
    }
}

const pestSectionHeight = pests.clientHeight;
const gridHeight = leftSectionContainer.clientHeight;

const speed = 2;
const interval = 100;

let initialPosition = -pestSectionHeight; // Make it start above the fold


function movePestSection() {
    initialPosition += speed;
    if (initialPosition + pestSectionHeight > gridHeight) {
        initialPosition = gridHeight - pestSectionHeight; 
        
        if (hearts.length > 0) {
            removeHeart(); // Remove one heart if available
        }
    }

    pests.style.top = initialPosition + "px";
}

setInterval(movePestSection, interval)

