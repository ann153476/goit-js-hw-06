const myInput = document.querySelector("#validation-input");

myInput.addEventListener("blur", function() {
    debugger
    if (Number(myInput.dataset.length) === myInput.value.length){
        myInput.classList.add("valid");
        myInput.classList.remove("invalid");
    } else {
        myInput.classList.add("invalid");
        myInput.classList.remove("valid");
    }
});
