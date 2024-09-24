import { Forecast } from "./forecast.js";

const cityForm = document.getElementById('search-form');
const source = document.getElementById("weatherTemplate").innerHTML;
const infoBlock = document.getElementById("info");
const template = Handlebars.compile(source);

const forecast = new Forecast();

const updateUI = (data) => {
  let html = template(data);
  infoBlock.innerHTML = html;
};

cityForm.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const city = cityForm.city.value.trim();
    cityForm.reset();

    const data = await forecast.getWeather(city);

    updateUI(formatData(data));
  } catch (error) {
    infoBlock.innerHTML = error.message;
  }
});

function formatData(data) {
  return {
    city: data.name,
    temp: data.main.temp.toFixed(0),
    description: data.weather[0].main,
    humidity: data.main.humidity,
    wind: data.wind.speed
  }
}