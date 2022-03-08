import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import companyReducer from './company/company';

const reducer = combineReducers({ companyReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
