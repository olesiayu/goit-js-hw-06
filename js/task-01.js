const numberOfCategories = document.querySelectorAll(`li.item`).length;
console.log(`Number of categories: ${numberOfCategories}`);

const category = document.querySelectorAll(`h2`);

const elements = document.querySelectorAll(`.item ul`);

console.log(`Category: ${category[0].textContent}`);
console.log(`Elements: ${elements[0].children.length}`);

console.log(`Category: ${category[1].textContent}`);
console.log(`Elements: ${elements[1].children.length}`);

console.log(`Category: ${category[2].textContent}`);
console.log(`Elements: ${elements[2].children.length}`);