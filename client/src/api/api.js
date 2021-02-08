import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : 'http://localhost:3001/api',
});

export const getMovie = async (title) => {
  return await axiosInstance.get(`/search/movie/${title}`);
};

export const getTvShow = async (title) => {
  return await axiosInstance.get(`/search/tv/${title}`);
};

export const getSearchResult = async (data) => {
  return await axiosInstance.get(`/search/${data.title}/${data.genre}`);
};

export const getGenres = async () => {
  return await axiosInstance.get('/search/genres');
};

export const getAutocompleteSuggestions = async (text, genre) => {
  return await axiosInstance.get(`/search/autocomplete/${text}/${genre}`);
};
