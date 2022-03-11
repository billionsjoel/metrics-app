/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import filterName from '../filteredCountry';

const AllCountries = (props) => {
  const { countriesData } = props;
  const { filter } = countriesData;
  const navigate = useNavigate();

  return (

    <div className="countriesContainer d-flex">
      {filter.map((country) => (
        <div
          className="countryBox d-flex col pointer"
          key={country.id}
          onClick={() => navigate(`/${filterName(country.name)}`)}
          aria-hidden="true"
        >
          <div className="country-contents">
            <div className="arrowIcon d-flex">
              <i
                className="bi bi-arrow-right-circle pointer"
                aria-hidden="true"
                onClick={() => navigate(`/${filterName(country.name)}`)}
              />
            </div>
            <div className="countryInfo d-flex col">
              <div className="bold countryName">{country.name}</div>
              <div className="countryTotal">
                {Intl.NumberFormat().format(country.today_confirmed)}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="source d-flex col ck"
        key="empty box"
        onClick={() => navigate('/')}
        aria-hidden="true"
      >
        <p>Source: Johns Hopkins University.</p>
        <p>API by Narrativa</p>
        <p>
          Made with ♥️ by :
          <br />
          <span>
            <a href="https://github.com/billionsjoel" className="credits">
							&nbsp; Billions A Joel
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

AllCountries.propTypes = {
  countriesData: PropTypes.shape({
    filter: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default AllCountries;
