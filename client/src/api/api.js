import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api',
});

export const findMovie = async (name) => {
  return await axiosInstance.get('/search/movie', { name: name });
};

export const findTvShow = async (name) => {
  return await axiosInstance.get('/search/movie/tv', { name: name });
};
