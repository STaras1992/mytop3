import { SET_GENRES } from '../actionTypes.js';
import * as api from '../../api/api.js';

const setGenres = (genres) => ({ type: SET_GENRES, payload: genres });

export const fetchAvailableGenres = () => async (dispatch) => {
  try {
    const response = await api.getGenres();
    if (response.status === 200) dispatch(setGenres(response.data.genres));
  } catch (err) {
    console.log(err.message);
  }
};
