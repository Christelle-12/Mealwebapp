import { togglepopup } from './popup.js';
import { mealurl, baseurl } from './restapi.js';
import { btnclose, formdata } from './dom_elements.js';
import commentcounter from './countcomment.js';

const commentdisplay = (content) => {
  document.querySelector('.popup-comments').innerHTML = content;
};

const commentpage = (list) => {
  document.getElementById('popupmeal-name').textContent = list.strMeal;
  document.getElementById('popupmeal-id').value = list.idMeal;
  document.getElementById(
    'popupmeal-cat',
  ).textContent = `Category : ${list.strCategory}`;
  document.getElementById(
    'popupmeal-area',
  ).textContent = `Area : ${list.strArea}`;
  document.getElementById(
    'popupmeal-tag',
  ).textContent = `Tags : ${list.strTags}`;
  document.getElementById('popupmeal-img').src = list.strMealThumb;
  document.getElementById('popupmeal-video').href = list.strYoutube;
};

const mealbyid = async (id) => {
  const url = `${mealurl}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      commentpage(data.meals[0]);
    }
  } catch (error) {
    throw error();
  }
};

const updatecomments = async (id) => {
  const url = `${baseurl}/comments?item_id=${id}`;
  commentdisplay('');
  commentcounter('');
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
      commentcounter(lists.length);
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
`;
      });
      commentdisplay(html);
    }
  } catch (error) {
    throw error();
  }
};

export const addcomment = (event) => {
  mealbyid(event.target.value);
  updatecomments(event.target.value);
  togglepopup();
};

const createcomment = async (event) => {
  event.preventDefault();
  const { itemid, username, comment } = event.target.elements;
  const data = {
    item_id: itemid.value,
    username: username.value,
    comment: comment.value,
  };
  const url = `${baseurl}/comments`;
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
    throw error();
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
