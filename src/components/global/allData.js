import { React } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AllCountries from '../countries/countries';
import WorldData from './globalData';
import { filteredCountries } from '../../redux/countries/countries';

const DisplayData = (props) => {
  const { countriesData, allData } = props;
  const dispatch = useDispatch();

  const handleFilter = () => {
    const input = document.getElementById('countryFilter');
    const name = input.value;
    dispatch(filteredCountries(name));
  };

  return (
    <div>
      <WorldData worldData={allData} />
      <div className="separator d-flex col">
        <p className="searchTitle">Search Country</p>
        <input
          id="countryFilter"
          className="filter"
          type="text"
          onChange={() => handleFilter()}
          placeholder="Start typing a country name"
        />
      </div>
      <AllCountries countriesData={countriesData} />
    </div>
  );
};

export default DisplayData;

DisplayData.propTypes = {
  countriesData: PropTypes.shape({}).isRequired,
  allData: PropTypes.shape({}).isRequired,
};
