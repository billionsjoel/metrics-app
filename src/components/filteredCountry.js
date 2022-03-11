const filteredCountry = (input) => {
  let countryName = input.split('');
  countryName = countryName.filter((char) => char.match(/[a-zA-Z\s]/));
  countryName.map((char, i) => {
    if (char === ' ') {
      countryName[i] = '-';
      return countryName[i];
    }
    return null;
  });
  countryName = countryName.join('').toLowerCase();
  return countryName;
};

export default filteredCountry;
