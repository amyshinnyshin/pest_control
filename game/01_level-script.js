const buttons = document.querySelectorAll("button")

//COIN BUTTON/USE BUTTON
const sprayButton = document.getElementById("spray-button");
const aerosolButton = document.getElementById("aerosol-button");
const vacuumButton = document.getElementById("vacuum-button");
const ultralightButton = document.getElementById("uv-light-button");
const flashbombButton = document.getElementById("flash-bomb-button");

//UPGRADES CONTAINER
const spray = document.getElementById("spray");
const aerosol = document.getElementById("aerosol");
const vacuum = document.getElementById("vacuum");
const ultralight = document.getElementById("ultralight");
const flashbomb = document.getElementById("flash-bomb");


//--------------------------------COIN BUTTON HOVER.... 
function buttonHover (element) {
    element.addEventListener("mouseover", () =>{
        element.style.backgroundColor = "#1A159C";
        element.style.borderColor = "#1A159C";
    });
    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    });
};

buttons.forEach((button) => {
    buttonHover((button));
});

//--------------------------------SPRAY BUTTON ACTIVE 
sprayButton.style.cssText = "background-color: #1A159C; border-color: #1A159C; box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.50) inset; pointer-events: none;";
sprayButton.textContent = "Use";


aerosol.style.cssText = "opacity: .5; pointer-events: none;";
vacuum.style.cssText = "opacity: .5; pointer-events: none;";
ultralight.style.cssText = "opacity: .5; pointer-events: none;";
flashbomb.style.cssText = "opacity: .5; pointer-events: none;";



//--------------------------------HOVER STATE - life lost... 
const yesWinningSelected = document.getElementById("yes-winning-selected");
const noWinningSelected = document.getElementById("no-winning-selected");

const yesLosingSelected = document.getElementById("yes-lost-selected");
const noLosingSelected = document.getElementById("no-lost-selected");

const yesWinning = document.getElementsByClassName("selection yes-winning");
const noWinning = document.getElementsByClassName("selection no-winning");

const yesLosing = document.getElementsByClassName("selection yes-losing");
const noLosing = document.getElementsByClassName("selection no-losing");

const yesWinningText = document.getElementById("yes-winning-text")
const noWinningText = document.getElementById("no-winning-text")

const yesLosingText = document.getElementById("yes-losing-text")
const noLosingText = document.getElementById("no-losing-text")


function selectionLinkHover(element, selected, text) {
    element.addEventListener("mouseover", () =>{
        selected.style.opacity = 1;
        text.style.textDecoration = "underline";
    });
    element.addEventListener("mouseout", () => {
        selected.style.opacity = 0;
        text.style.textDecoration = "none"; 
    });
};

for(let i=0; i < yesWinning.length; i++){
    selectionLinkHover(yesWinning[i], yesWinningSelected, yesWinningText);
};
for(let i=0; i < noWinning.length; i++){
    selectionLinkHover(noWinning[i], noWinningSelected, noWinningText);
}

for(let i=0; i < yesLosing.length; i++){
    selectionLinkHover(yesLosing[i], yesLosingSelected, yesLosingText);
};
for(let i=0; i < noLosing.length; i++){
    selectionLinkHover(noLosing[i], noLosingSelected, noLosingText);
}