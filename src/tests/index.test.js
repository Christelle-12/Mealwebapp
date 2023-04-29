<<<<<<< HEAD
// Import the functions from index.js
import { render, loading, addaction } from "./index.js";
import getcategories from "./module/meal.js";

// Mock the getcategories function
jest.mock("./module/meal", () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve([
      {
        idMeal: "1",
        strMeal: "Spaghetti",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xxxyyy1234567890.jpg",
      },
      {
        idMeal: "2",
        strMeal: "Pizza",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/zzzwww1234567890.jpg",
      },
    ])
  ),
}));

describe("render function", () => {
  test("should render the meals", () => {
    // Set up the DOM element
    document.body.innerHTML = `
      <ul id="meals-list"></ul>
    `;
    const ulelement = document.getElementById("meals-list");

    // Call the render function
    render();

    // Check if the meals were rendered correctly
    const mealItems = ulelement.querySelectorAll(".meal-item");
    expect(mealItems.length).toBe(2);
    expect(mealItems[0].querySelector(".meal-head").textContent).toBe(
      "Spaghetti"
    );
    expect(mealItems[1].querySelector(".meal-head").textContent).toBe("Pizza");
  });
});

describe("loading function", () => {
  test("should call getcategories and render function", async () => {
    // Set up the DOM element
    document.body.innerHTML = `
      <ul id="meals-list"></ul>
    `;

    // Call the loading function
    await loading();

    // Check if the getcategories function was called
    expect(getcategories).toHaveBeenCalled();

    // Check if the meals were rendered correctly
    const ulelement = document.getElementById("meals-list");
    const mealItems = ulelement.querySelectorAll(".meal-item");
    expect(mealItems.length).toBe(2);
    expect(mealItems[0].querySelector(".meal-head").textContent).toBe(
      "Spaghetti"
    );
    expect(mealItems[1].querySelector(".meal-head").textContent).toBe("Pizza");
  });
});

describe("addaction function", () => {
  test("should add event listeners to meal buttons", () => {
    // Set up the DOM element
    document.body.innerHTML = `
      <ul id="meals-list">
        <li class="meal-item meal-card">
          <button class="meal-button meal-comment" value="1">&#10029; Comment</button>
          <button class="meal-button meal-like" value="1">&#10084; Like</button>
        </li>
      </ul>
    `;

    // Call the addaction function
    addaction();

    // Check if the event listeners were added correctly
    const commentButton = document.querySelector(".meal-comment");
    const likeButton = document.querySelector(".meal-like");
    expect(commentButton).not.toBeNull();
    expect(likeButton).not.toBeNull();
    expect(commentButton.getAttribute("value")).toBe("1");
    expect(likeButton.getAttribute("value")).toBe("1");
  });
});
=======
// // Import the functions from index.js
// import { render, loading, addaction } from './index';
// import getcategories from './module/meal';

// // Mock the getcategories function
// jest.mock('./module/meal', () => ({
//   __esModule: true,
//   default: jest.fn(() => Promise.resolve([
//     {
//       idMeal: '1',
//       strMeal: 'Spaghetti',
//       strMealThumb: 'https://www.themealdb.com/images/media/meals/xxxyyy1234567890.jpg',
//     },
//     {
//       idMeal: '2',
//       strMeal: 'Pizza',
//       strMealThumb: 'https://www.themealdb.com/images/media/meals/zzzwww1234567890.jpg',
//     },
//   ]))),
// }));

// describe('render function', () => {
//   test('should render the meals', () => {
//     // Set up the DOM element
//     document.body.innerHTML = `
//       <ul id="meals-list"></ul>
//     `;
//     const ulelement = document.getElementById('meals-list');

//     // Call the render function
//     render();

//     // Check if the meals were rendered correctly
//     const mealItems = ulelement.querySelectorAll('.meal-item');
//     expect(mealItems.length).toBe(2);
//     expect(mealItems[0].querySelector('.meal-head').textContent).toBe('Spaghetti');
//     expect(mealItems[1].querySelector('.meal-head').textContent).toBe('Pizza');
//   });
// });

// describe('loading function', () => {
//   test('should call getcategories and render function', async () => {
//     // Set up the DOM element
//     document.body.innerHTML = `
//       <ul id="meals-list"></ul>
//     `;

//     // Call the loading function
//     await loading();

//     // Check if the getcategories function was called
//     expect(getcategories).toHaveBeenCalled();

//     // Check if the meals were rendered correctly
//     const ulelement = document.getElementById('meals-list');
//     const mealItems = ulelement.querySelectorAll('.meal-item');
//     expect(mealItems.length).toBe(2);
//     expect(mealItems[0].querySelector('.meal-head').textContent).toBe('Spaghetti');
//     expect(mealItems[1].querySelector('.meal-head').textContent).toBe('Pizza');
//   });
// });

// describe('addaction function', () => {
//   test('should add event listeners to meal buttons', () => {
//     // Set up the DOM element
//     document.body.innerHTML = `
//       <ul id="meals-list">
//         <li class="meal-item meal-card">
//           <button class="meal-button meal-comment" value="1">&#10029; Comment</button>
//           <button class="meal-button meal-like" value="1">&#10084; Like</button>
//         </li>
//       </ul>
//     `;

//     // Call the addaction function
//     addaction();

//     // Check if the event listeners were added correctly
//     const commentButton = document.querySelector('.meal-comment');
//     const likeButton = document.querySelector('.meal-like');
//     expect(commentButton).not.toBeNull();
//     expect(likeButton).not.toBeNull();
//     expect(commentButton.getAttribute('value')).toBe('1');
//     expect(likeButton.getAttribute('value')).toBe('1');
//   });
// });
>>>>>>> developer
