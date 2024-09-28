const apiKey = "a4c065f24d8b6403dc757b8eec2628c1";

// Обробка натискання кнопки "Отримати погоду"
document
  .getElementById("getWeatherButton")
  .addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    document.getElementById(
      "weatherResult"
    ).innerHTML = `<p>Будь ласка, введіть назву міста.</p>`;
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

  // Показуємо індикатор завантаження
  document.getElementById("weatherResult").innerHTML = `<p>Завантаження...</p>`;

  // Використання fetch для запиту до API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Місто не знайдено або проблема з сервером");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
                <h2>Погода у місті: ${data.name}</h2>
                <p>Температура: ${data.main.temp} °C</p>
                <p>Опис: ${data.weather[0].description}</p>
            `;
      document.getElementById("weatherResult").innerHTML = weatherInfo; // Виводимо результат
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>${error.message}</p>`; // Виводимо помилку
    });
}
