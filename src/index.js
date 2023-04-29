<<<<<<< HEAD
import './assets/title.png';
import './assets/main.css';
=======
import './assets/style.css';
import './assets/logo.png';
import './assets/meal.jpg';
import getcategories from './module/meal.js';
import { ulelement } from './module/dom_elements.js';
import addaction from './module/eventlistener.js';
import { updatelikes } from './module/likes.js';
import { addpopup } from './module/comments.js';

let meals = [];
const render = () => {
  let list = '';
  document.getElementById(
    'item-count'
  ).textContent = `Seafood (${meals.length})`;
  meals.forEach((meal) => {
    list += `
    <li class="meal-item meal-card">
          <p class="meal-head">${meal.strMeal}</p>
          <hr>
          <img src="${meal.strMealThumb}" class="meal-thumbail">
          <hr>
          <div class="meal-interaction">
          <button class="meal-button meal-comment" value="${meal.idMeal}">&#10029; Comment</button>
            <button class="meal-button meal-like" value="${meal.idMeal}">&#10084; Like</button><p id="like${meal.idMeal}"> Liked 0</p></div>
          </div>
        </li>
    `;
  });
  ulelement.innerHTML = list;
  updatelikes();
};

const loading = async () => {
  const resp = await getcategories().then((data) => {
    meals = [...data];
    render();
    addaction();
  });
  addpopup();
};
loading();
>>>>>>> e8d8d8c7995670b1097012233071640eb51be0ec
