import { SET_GENRES, SET_SEARCH_RESULT } from '../actionTypes.js';
import { MOVIE, TV_SHOW } from '../../consts/genres.js';
import * as api from '../../api/api.js';

const setGenres = (genres) => ({ type: SET_GENRES, payload: genres });
const setSearchResult = (result) => ({ type: SET_SEARCH_RESULT, payload: result });

const searchRequest = (data) => async (dispatch) => {
  try {
    if (data.genre === MOVIE) {
      const response = await api.getMovie(data.title);
      if (response.status === 200) dispatch(setSearchResult(response.data.result));
    } else if (data.genre === TV_SHOW) {
      const response = await api.getTvShow(data.title);
      if (response.status === 200) dispatch(setSearchResult(response.data.result));
    }
  } catch (err) {
    console.log(err.message);
  }
};

const getGenres = () => async (dispatch) => {
  try {
    const response = await api.getGenres();
    if (response.status === 200) dispatch(setGenres(response.data.genres));
  } catch (err) {
    console.log(err.message);
  }
};
