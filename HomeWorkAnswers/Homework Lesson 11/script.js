/*
const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';  // Замість YOUR_API_KEY вставте свій API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    // Використання fetch для запиту до API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Місто не знайдено або проблема з сервером');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>Погода у місті: ${data.name}</h2>
                <p>Температура: ${data.main.temp} °C</p>
                <p>Опис: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
*/

document.getElementById("getForecast").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const apiUrl = `https://wttr.in/${city}?format=%C+%t`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found or server error!");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("weatherResult").innerHTML = `<p>Weather in ${city}: ${data}</p>`;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
});
