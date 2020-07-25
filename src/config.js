// Configuration for TMDB
// Read more about the API here: https://developers.themoviedb.org/

export const auth0Config = {
  domain: 'YOUR DOMAIN FROM AUTH0 HERE!!!',
  client_id: 'YOUR CLIENT ID FROM AUTH0 HERE!!!',
  redirect_uri: 'http://localhost:3000',
};

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'INSERT YOUR OWN API KEY HERE!!!';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
