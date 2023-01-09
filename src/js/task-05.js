
function actionInput(event){
    mySpan.innerHTML =`${event.target.value}`;
}


const myInput = document.querySelector("#name-input");
myInput.addEventListener('input', actionInput);
const mySpan = document.querySelector("#name-output");
let valueSpan = document.querySelector("#name-output").textContent;

