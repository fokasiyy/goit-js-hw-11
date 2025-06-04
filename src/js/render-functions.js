import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const galleryBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
      <li class="gallery-item">
        <a href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}"/></a>
        <div class="stats">
          <p><span>Likes</span><span>${likes}</span></p>
          <p><span>Views</span><span>${views}</span></p>
          <p><span>Comments</span><span>${comments}</span></p>
          <p><span>Downloads</span><span>${downloads}</span></p>
        </div>
      </li>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);

  galleryBox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.visibility = 'visible';
}

export function hideLoader() {
  loader.style.visibility = 'hidden';
}