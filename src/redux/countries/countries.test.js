import store from '../configureStore';
import { NEW_DATA, FILTERED_DATA } from '../constants';

describe('redux testing', () => {
  test('add new data action', () => {
    store.dispatch({
      type: NEW_DATA,
      playload: [
        { name: 'uganda' },
        { name: 'kenya' },
        { name: 'tanzania' },
        { name: 'morroco' },
      ],
    });
    expect(store.getState().countryStore.countries).toHaveLength(4);
  });

  test('checks if filter action filters', () => {
    store.dispatch({
      type: FILTERED_DATA,
      playload: 'uganda',
    });
    expect(store.getState().countryStore.filter[0].name).toBe('uganda');
  });
});
