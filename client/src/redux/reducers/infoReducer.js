import { SET_GENRES } from '../actionTypes.js';
import PropTypes from 'prop-types';

const initState = {
  genres: [],
  searchResult: { result: null },
};

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: [...action.payload] };
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
