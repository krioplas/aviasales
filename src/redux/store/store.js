import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filterReducers from '../reducers/filterReducers';
import apiReducer from '../reducers/apiReducer';

const store = createStore(
  combineReducers({ filterReducers, apiReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
