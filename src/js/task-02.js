const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  let list = document.querySelector('#ingredients');
for(let i=0; i<ingredients.length;i++){
  let lost = document.createElement("li");
  lost.textContent = ingredients[i] ;
  lost.classList.add("item");
  list.append(lost);
}





console.log(list);