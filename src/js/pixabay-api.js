// function HTTP request
import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44067524-7b37ef940db212c179aad5861';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  return axios.get(url)
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw new Error('Failed to fetch images')
    });
}
