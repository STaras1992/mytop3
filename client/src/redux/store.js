import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducer.js';

const reducers = combineReducers({
  search: searchReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));

window.store = Store;

export default Store;
