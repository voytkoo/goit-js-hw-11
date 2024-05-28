import { fetchImages } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";
import { showError } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoad } from "./js/render-functions";
import { hideLoad } from "./js/render-functions";
import { moduleLightbox } from "./js/render-functions";
import { refreshgalleries } from "./js/render-functions";

const form = document.querySelector('.form-search');
const formInput = document.querySelector('.form-search input[name="query"]');

form.addEventListener ('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = formInput.value.trim();

  if (!query) {
    showError('Please enter a search term');
    return;
  }
  
    clearGallery();
    showLoad();

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
          renderImage(images);
          moduleLightbox();
          refreshgalleries();
      }
    })
    .catch(error => {
      showError('An error occured while fetching images');
      console.error(error);
    })
      .finally(() => {
          hideLoad();
      });

}