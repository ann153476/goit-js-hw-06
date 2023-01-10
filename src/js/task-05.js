
function actionInput(event){
    if(event.target.value){
        mySpan.innerHTML =`${event.target.value}`;
   } else{
       mySpan.innerHTML =`Anonymous`;
   }
}


const myInput = document.querySelector("#name-input");
myInput.addEventListener('input', actionInput);
const mySpan = document.querySelector("#name-output");
let valueSpan = document.querySelector("#name-output").textContent;

