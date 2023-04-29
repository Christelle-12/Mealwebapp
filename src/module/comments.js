import { togglepopup } from './popup.js';
import { meal_url, base_url } from './restapi.js';
import { btnclose, formdata } from './dom_elements.js';
<<<<<<< HEAD
=======
import commentcounter from './countcomment.js';

const commentdisplay = (content) => {
  document.querySelector('.popup-comments').innerHTML = content;
};
>>>>>>> feature_finaltouch

const commentpage = (list) => {
  document.getElementById('popupmeal-name').textContent = list.strMeal;
  document.getElementById('popupmeal-id').value = list.idMeal;
  document.getElementById(
    'popupmeal-cat'
  ).textContent = `Category : ${list.strCategory}`;
  document.getElementById(
    'popupmeal-area'
  ).textContent = `Area : ${list.strArea}`;
  document.getElementById(
    'popupmeal-tag'
  ).textContent = `Tags : ${list.strTags}`;
  document.getElementById('popupmeal-img').src = list.strMealThumb;
  document.getElementById('popupmeal-video').href = list.strYoutube;
};

const mealbyid = async (id) => {
  const url = `${meal_url}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      commentpage(data.meals[0]);
    }
  } catch (error) {
    console.log('Something is wrong comments.js line 14');
    throw error;
  }
};

const updatecomments = async (id) => {
  const url = `${base_url}/comments?item_id=${id}`;
<<<<<<< HEAD
  document.querySelector('.popup-comments').innerHTML = '';
  document.getElementById('comment-count').textContent = '';
=======
  commentdisplay('');
  commentcounter('');
>>>>>>> feature_finaltouch
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
<<<<<<< HEAD
      document.getElementById('comment-count').textContent = `(${
        lists.length ?? 0
      })`;
=======
      commentcounter(lists.length);
>>>>>>> feature_finaltouch
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
        `;
      });
<<<<<<< HEAD
      document.querySelector('.popup-comments').innerHTML = html;
=======
      commentdisplay(html);
>>>>>>> feature_finaltouch
    }
  } catch (error) {
    throw error;
  }
};

export const addcomment = (event) => {
  mealbyid(event.target.value);
  updatecomments(event.target.value);
  togglepopup();
};

const createcomment = async (event) => {
  event.preventDefault();
  const { item_id, username, comment } = event.target.elements;
  const data = {
    item_id: item_id.value,
    username: username.value,
    comment: comment.value,
  };
  const url = `${base_url}/comments`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatecomments(data.item_id);
        formdata.reset();
      }
    });
  } catch (error) {
    throw error;
  }
};

const commentform = () => {
  formdata.addEventListener('submit', createcomment);
};
const closepopup = () => {
  btnclose.addEventListener('click', togglepopup);
};
export const addpopup = () => {
  closepopup();
  commentform();
};
