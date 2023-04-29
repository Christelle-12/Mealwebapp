import { base_url } from './restapi';
import likecounter from './countlike.js';

const renderlikes = (lists) => {
  lists.forEach((list) => {
    try {
      const id = `like${list.item_id}`;
      const like = `Liked ${list.likes}`;
      if (document.getElementById(id)) {
        likecounter(id, like);
      }
    } catch (error) {
      throw error;
    }
  });
};
export const updatelikes = async () => {
  const url = `${base_url}/likes/`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderlikes(data);
    }
  } catch (error) {
    throw error;
  }
};

export const addlike = async (event) => {
  const mealid = event.target.value;
  const url = `${base_url}/likes/`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ item_id: mealid }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatelikes();
      }
    });
  } catch (error) {
    throw error;
  }
};
