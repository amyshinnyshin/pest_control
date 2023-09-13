const startSelected = document.getElementById("start-selected");
const optionSelected = document.getElementById("options-selected");

const start = document.getElementsByClassName("selection start");
const options = document.getElementsByClassName("selection options");

const startText = document.getElementById("start-text")
const optionsText = document.getElementById("options-text")


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

for(let i=0; i < start.length; i++){
    selectionLinkHover(start[i], startSelected, startText);
};
for(let i=0; i < options.length; i++){
    selectionLinkHover(options[i], optionSelected, optionsText);
}