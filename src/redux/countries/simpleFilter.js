/* eslint-disable max-len */
const simpleFilter = (countries, playload) => countries.filter((country) => country.name.toLowerCase().includes(playload.toLowerCase()));

export default simpleFilter;
