import { addcomment } from './comments.js';
import { addlike } from './likes.js';

const addaction = () => {
  const comments = document.querySelectorAll('.meal-comment');
<<<<<<< HEAD
  comments.forEach((comment) => {
    comment.addEventListener('click', addcomment);
  });
=======
>>>>>>> developer
  const likes = document.querySelectorAll('.meal-like');

  comments.forEach((comment) => {
    comment.addEventListener('click', addcomment);
  });
  likes.forEach((like) => {
    like.addEventListener('click', addlike);
  });
};

export default addaction;
