console.log("index_lesson11.html");

const apiKey = "b6da8f5ca6c40e6b15e11030b218de61";
const inputCity = document.querySelector("#inputCity");
const formCity = document.querySelector("#formCity");
const loader = document.querySelector("#loader");
const textWeather = document.querySelector("#textWeather");
let city;
let text;

formCity.addEventListener('submit', async function(e) {
  e.preventDefault();
  showLoader();

  city = inputCity.value;
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  try {
    let response = await fetch(url);
    let json = await response.json();

    if (!response.ok) throw new Error(`Ошибка при получении прогноза: ${response.status}, ${json.message}`);

    text = `<h3>Погода в місті ${city} зараз:</h3><p>${json.weather[0].description}<br/>Температура повітря: ${json.main.temp} °C<br/>Швидкість вітру: ${json.wind.speed} м/с</p>`;

  } catch (error) {
    text = error;

  }
  finally {
    hideLoader();
    renderWeather(text);
  }
})

function showLoader() {
  loader.style.display = "inline";
}

function hideLoader() {
  loader.style.display = "none";
}

function renderWeather(text) {
  textWeather.innerHTML = text;
}