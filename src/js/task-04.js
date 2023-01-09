function fUp (){
    spann.innerHTML = `${valueSpan-=1}`;
}
function fDown (){
    spann.innerHTML = `${valueSpan+=1}`;
}

const spann = document.querySelector("#value");

let valueSpan = Number(document.querySelector("#value").textContent);

const btnUp = document.querySelector('[data-action="decrement"]');
const btnDown = document.querySelector('[data-action="increment"]');


 btnUp.addEventListener('click', fUp );
 btnDown.addEventListener('click', fDown);






