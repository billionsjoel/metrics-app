/* eslint-disable max-len */
import { getCountries, filteredCountries } from './getCountries';
import { NEW_DATA, FILTERED_DATA, EXISTING_DATA } from '../constants';
import simpleFilter from './simpleFilter';

const countryReducer = (state = { countries: [], filter: [] }, action) => {
  switch (action.type) {
    case NEW_DATA:
      return {
        ...state,
        countries: action.playload,
        filter: action.playload,
      };
    case FILTERED_DATA:
      return {
        ...state,
        filter: simpleFilter(state.countries, action.playload),
      };
    case EXISTING_DATA:
      return {
        ...state,
        filter: state.countries,
      };
    default:
      return state;
  }
};

export { countryReducer, getCountries, filteredCountries };
