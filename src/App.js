/* eslint-disable no-tabs */
import React, { useEffect } from 'react';
import './sass/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from './redux/countries/countries';
import { getAll } from './redux/global/global';
import SingleCountry from './components/countries/country';
import filterCountry from './components/filteredCountry';
import DisplayData from './components/global/allData';

const App = () => {
  const countriesData = useSelector((state) => state.countryStore);
  const getAllData = useSelector((state) => state.allStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesData.length) {
      dispatch(getCountries());
    }
    if (!getAllData.length) {
      dispatch(getAll());
    }
  }, []);

  return (
    <Router>
      <main className="main d-flex col">
        <h1 className="main-heading">Covid-19 Statistics</h1>
        <Routes>
          <Route
            path="/"
            element={(
              <DisplayData
                allData={getAllData}
                countriesData={countriesData}
              />
     )}
          />
          {countriesData.countries.map((country) => (
            <Route
              key={country.id}
              path={`/${filterCountry(country.name)}`}
              element={<SingleCountry key={country.id} country={country} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
