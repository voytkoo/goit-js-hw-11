// functions for displaying interface elements
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('loader');



export function renderImage {

    gallery.innerHTML = markup(images);

function markup(images) {
  return images.map(image  =>
    `<li class="gallery-item">
  <a class="gallery-link" href="${image.webformatURL}">
    <img
      class="gallery-image"
      src="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
<ul class='info'>
      <li class="info-image><strong class="info-comment">Likes</strong> ${image.likes}</li>
      <li class="info-image><strong class="info-comment">Views</strong> ${image.views}</li>
      <li class="info-image><strong class="info-comment">Comments</strong> ${image.comments}</li>
      <li class="info-image><strong class="info-comment">Downloads</strong> ${image.downloads}</li>
      </ul>
</li>`
  ).join("");
};


}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoad() {
    loader.style.display = 'block';
}
 
export function hideLoad() {
    loader.style.display = 'none';
}

export function moduleLightbox() {
    galleries = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
}
export function refreshgalleries() {
  if (galleries) {
    galleries.refresh();
  } else {
    moduleLightbox();
  }
}