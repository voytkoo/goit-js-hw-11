// function HTTP request
import axios from 'axios';

const API_KEY = '44067524-7b37ef940db212c179aad5861';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: page,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
