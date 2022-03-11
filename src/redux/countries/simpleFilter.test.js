import simpleFilter from './simpleFilter';

test('checks if input exists', () => {
  expect(
    simpleFilter(
      [
        { name: 'uganda' },
        { name: 'kenya' },
        { name: 'tanzania' },
        { name: 'morroco' },
      ],
      'uganda',
    ),
  ).toHaveLength(1);
});
