const cityInput = document.getElementById("cityInput");
const getWeatherForm = document.getElementById("getWeather");
const apiKey = "bc291e9584effcd90fc1264a80a29958";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

getWeatherForm.addEventListener("submit", handleClick);

async function handleClick(e) {
  e.preventDefault();
  const city = cityInput.value;
  const apiUrl = baseUrl + `q=${city}&appid=${apiKey}&units=metric&lang=uk`;
  await fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Місто не знайдено або проблема з сервером");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
                <h2>Погода у місті: ${city}</h2>
                <p class="temp">Температура: ${data.main.temp} °C</p>
                <p class="feels_like">Відчувається як: ${data.main.feels_like} °C</p>
                <p class="pressure">Атмосферний тиск: ${data.main.pressure} гПа</p>
                <p class="humidity">Вологість: ${data.main.humidity} %</p>
                <p>Опис: ${data.weather[0].description}</p>                
            `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>${error.message}</p>`;
    });
  getWeatherForm.reset();
}
