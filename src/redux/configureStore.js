import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countryReducer } from './countries/countries';
import { globalReducer } from './global/global';

const reducer = combineReducers({
  countryStore: countryReducer,
  allStore: globalReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
