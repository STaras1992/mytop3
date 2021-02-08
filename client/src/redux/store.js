import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducer.js';
import infoReducer from './reducers/infoReducer.js';

const reducers = combineReducers({
  search: searchReducer,
  info: infoReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));

window.store = Store;

export default Store;
