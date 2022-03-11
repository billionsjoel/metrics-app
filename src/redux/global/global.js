import { resultsData } from '../../components/fetchapiData';
import { NEW_GLOBAL_DATA } from '../constants';

const filterData = (data) => {
  const totalData = data.total;
  return totalData;
};

const getAll = () => async (dispatch) => {
  const allData = await resultsData();
  dispatch({
    type: NEW_GLOBAL_DATA,
    playload: filterData(allData),
  });
};

const globalReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_GLOBAL_DATA:
      return action.playload;
    default:
      return state;
  }
};

export { globalReducer, getAll };
