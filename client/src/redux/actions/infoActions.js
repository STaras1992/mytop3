import { SET_GENRES, SET_POPULAR_MOVIES } from '../actionTypes.js';
import * as api from '../../api/api.js';

const setGenres = (genres) => ({ type: SET_GENRES, payload: genres });
const setPopularMovies = (movies) => ({ type: SET_POPULAR_MOVIES, payload: movies });

export const fetchAvailableGenres = () => async (dispatch) => {
  try {
    const response = await api.getGenres();
    if (response.status === 200) dispatch(setGenres(response.data.genres));
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchMostPopularMovies = () => async (dispatch) => {
  try {
    const response = await api.getPopularMovies();
    if (response.status === 200) dispatch(setPopularMovies(response.data.movies));
  } catch (err) {
    console.log(err.message);
  }
};
