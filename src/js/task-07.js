function size (event){
    
    text.style.fontSize = `${event.target.value}px`;
}
const text = document.querySelector("#text");
const myInput = document.querySelector("#font-size-control");
myInput.addEventListener("input", size);
console.log(myInput);

 


