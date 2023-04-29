import ulelement from './dom_elements.js';

test('getElementById returns the correct element', () => {
  document.body.innerHTML = '<ul id="meal-unorder-id"></ul>';
<<<<<<< HEAD
  const ulelement = document.getElementById('meal-unorder-id');
  expect(ulelement).toBeInstanceOf(HTMLUListElement);
});
=======
  expect(ulelement).toBeInstanceOf(HTMLUListElement);
});
>>>>>>> developer
