const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((element) => {
  const list = document.querySelector(`ul`);
  const item = document.createElement(`li`);
  item.textContent = element;
  item.classList.add("item");
  list.append(item);
  });