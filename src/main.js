import { fetchImages } from "./js/pixabay-api";
import { renderImage, showError, clearGallery, showLoad, hideLoad, refreshgalleries } from "./js/render-functions";
// import { moduleLightbox } from "./js/render-functions";


const form = document.querySelector('.form-search');
const formInput = document.querySelector('.form-search input[name="query"]');
let galleries = null;

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
        formInput.value = '';
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