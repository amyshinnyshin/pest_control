const yesSelected = document.getElementById("yes-selected");
const noSelected = document.getElementById("no-selected");

const yes = document.getElementsByClassName("selection yes");
const no = document.getElementsByClassName("selection no");

const yesText = document.getElementById("yes-text")
const noText = document.getElementById("no-text")


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

for(let i=0; i < yes.length; i++){
    selectionLinkHover(yes[i], yesSelected, yesText);
};
for(let i=0; i < no.length; i++){
    selectionLinkHover(no[i], noSelected, noText);
}