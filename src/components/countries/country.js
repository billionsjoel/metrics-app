/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filteredCountries } from '../../redux/countries/countries';

const SingleCountry = (props) => {
  const { country } = props;
  const {
    name,
    date,
    today_confirmed: confirmed,
    today_deaths: deaths,
    today_new_confirmed: todayConfirmed,
    today_new_deaths: todayDeaths,
  } = country;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filter = () => {
    const country = '';
    dispatch(filteredCountries(country));
  };

  return (
    <div className="selfCountries d-flex col">
      <div className="countryContainer d-flex col">
        <div className="title center bold d-flex">
          <p>{name}</p>
        </div>
        <div className="date d-flex">
          <p className="bold">Date:</p>
          <p>{date}</p>
        </div>
        <div className="country-stats">
          <div className="d-flex">
            <p className="bold">Total Comfirmed Cases:</p>
            <p>{Intl.NumberFormat().format(confirmed)}</p>
          </div>
          <div className="d-flex">
            <p className="bold">Total Deaths:</p>
            <p>{Intl.NumberFormat().format(deaths)}</p>
          </div>
          <div className="d-flex">
            <p className="bold">Comfirmed New Cases:</p>
            <p>{Intl.NumberFormat().format(todayConfirmed)}</p>
          </div>
          <div className="d-flex">
            <p className="bold">Deaths Today:</p>
            <p>{Intl.NumberFormat().format(todayDeaths)}</p>
          </div>
          <div
            className="source d-flex col"
            key="credit box"
            aria-hidden="true"
          >
            <p>Source: Johns Hopkins University.</p>
            <p>API by Narrativa technology from the Data API.</p>
            <p>
              Made with ♥️ by
              <br />
              <span>
                <a href="https://github.com/billionsjoel" className="credits">
                  Billions A Joel
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="backButton">
          <i
            className="bi bi-arrow-left-circle pointer"
            onClick={() => {
						  filter();
						  navigate('/');
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

SingleCountry.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
    today_new_confirmed: PropTypes.number,
    today_new_deaths: PropTypes.number,
  }).isRequired,
};

export default SingleCountry;
