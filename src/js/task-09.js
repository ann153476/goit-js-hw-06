function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChange(){
  let newColor = getRandomHexColor();
  spann.innerHTML = `${newColor}`;
  body.style.backgroundColor= newColor;
}
const spann = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
btn.addEventListener("click", colorChange);




  