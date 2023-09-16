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

