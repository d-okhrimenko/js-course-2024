const weatherForm = document.querySelector('.js-weatherForm');
const weatherList = document.querySelector('.js-weatherList');

weatherForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  // console.log(evt.currentTarget.elements);
  const { cityName, days } = evt.currentTarget.elements;
  // console.log(cityName.value);
  // console.log(days.value);

  getWeather(cityName.value, days.value)
    .then(data => (weatherList.innerHTML = createWeatherListMarkup(data)))
    .catch(err => (weatherList.innerHTML = `<li>${err.message}</li>`));
}

function getWeather(city, days) {
  // http://api.weatherapi.com/v1/forecast.json?key=99a332c4db4e451e82690539242409&q=Kyiv&days=3&lang=uk
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = '99a332c4db4e451e82690539242409';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    lang: 'uk',
    q: city,
    days,
  });
  // console.log(searchParams.toString());

  return fetch(`${BASE_URL}/forecast.json?${searchParams}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createWeatherListMarkup(data) {
  const {
    location: { name, country },
    forecast: { forecastday },
  } = data;

  return forecastday
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li>
        <h2>${name}</h2>
        <p>${country}</p>
        <img src="${icon}" alt="${text}" />
        <h3>${avgtemp_c} &#8451;</h3>
        <p>${text}</p>
        <h3>${date}</h3>
      </li>`
    )
    .join('');
}
