const URL = 'https://api.covid19tracking.narrativa.com/api/';
const date = new Date(new Date().setDate(new Date().getDate() - 1));
const now = date.toISOString().slice(0, 10);

const ENDPOINT = `${URL}${now}`;

const fetchData = (ENDPOINT) => {
  const data = fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const resultsData = async () => fetchData(ENDPOINT);

export { resultsData, now };
