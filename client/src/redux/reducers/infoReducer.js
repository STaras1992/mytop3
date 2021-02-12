import { SET_GENRES, SET_POPULAR_MOVIES } from '../actionTypes.js';
import PropTypes from 'prop-types';

const initState = {
  genres: [],
  popularMovies: [],
};

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: [...action.payload] };
    case SET_POPULAR_MOVIES:
      return { ...state, popularMovies: [...action.payload] };
    default:
      return state;
  }
};

infoReducer.propTypes = {
  state: PropTypes.object,
  action: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default infoReducer;
