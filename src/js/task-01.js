console.log("Number of categories:",document.querySelectorAll('.item').length);
let categories =document.querySelectorAll('h2');
let Elements = document.querySelectorAll('.item>ul');
for(let i=0; i<categories.length;i++){
    console.log("Category:",categories[i].textContent);
    console.log("Elements:", Elements[i].querySelectorAll('li').length);
}










