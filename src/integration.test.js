/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './redux/configureStore';
import SingleCountry from './components/countries/country';

describe('tests components', () => {
  const countryData = {
    name: 'uganda',
    date: '23/23/32',
    today_confirmed: 121,
    today_deaths: 12,
    today_new_confirmed: 232,
    today_new_deaths: 12,
  };

  test('checks for a single country component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SingleCountry country={countryData} />
      </Provider>,
      {
			  wrapper: MemoryRouter,
      },
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('checks the country name to be uganda', () => {
    const { container } = render(
      <Provider store={store}>
        <SingleCountry country={countryData} />
      </Provider>,
      {
			  wrapper: MemoryRouter,
      },
    );
    expect(container.querySelector('.title').textContent).toBe('uganda');
  });
});
