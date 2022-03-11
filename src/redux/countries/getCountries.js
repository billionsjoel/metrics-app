import { resultsData, now } from '../../components/fetchapiData';
import { NEW_DATA, FILTERED_DATA, EXISTING_DATA } from '../constants';

const filterData = (data) => {
  const date = now;
  const newData = [];
  const dataByDate = data.dates[date].countries;
  const countryIndex = Object.keys(dataByDate);

  countryIndex.forEach((countryIndex) => {
    newData.push(dataByDate[countryIndex]);
  });
  return newData;
};

const filteredCountries = (name) => (dispatch) => {
  if (name.length) {
    dispatch({
      type: FILTERED_DATA,
      playload: name,
    });
  } else {
    dispatch({
      type: EXISTING_DATA,
      playload: null,
    });
  }
};

const getCountries = () => async (dispatch) => {
  const allFetchedData = await resultsData();

  dispatch({
    type: NEW_DATA,
    playload: filterData(allFetchedData),
  });
};

export { getCountries, filteredCountries };
