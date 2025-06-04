import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  clearGallery();

  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images && images.length > 0) {
        createGallery(images);
      } else {
        iziToast.show({
          title: '❌',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: 'white',
          titleColor: 'white',
          backgroundColor: '#ef4040',
          position: 'topRight',
        });
      }
    })
    .finally(() => {
      hideLoader();
    });
});