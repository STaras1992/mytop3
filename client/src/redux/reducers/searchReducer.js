import { SET_SEARCH_RESULT } from '../actionTypes.js';
import PropTypes from 'prop-types';

const initState = {
  // genres: [],
  searchResult: { result: null },
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    // case SET_GENRES:
    //   return { ...state, genres: [...action.payload] };
    case SET_SEARCH_RESULT:
      return { ...state, searchResult: { ...action.payload } };
    default:
      return state;
  }
};

searchReducer.propTypes = {
  state: PropTypes.object,
  action: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default searchReducer;
