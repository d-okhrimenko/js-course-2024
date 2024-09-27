function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const weatherResult = document.getElementById('weatherResult');
  const city = cityInput.value;
  const apiKey = 'b2e30f7ef0386c960ef0424843922ae9';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Місто не знайдено або проблема з сервером');
      }
      return response.json();
    })
    .then(data => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const weatherInfo = `
                        <h2>Погода у місті ${data.name}</h2>
                        <div class="weather-description">
                            <img src="${iconUrl}" alt="${data.weather[0].description}" class="weather-icon">
                            ${data.weather[0].description}
                        </div>
                        <div class="weather-details">
                            <p>Температура: ${data.main.temp.toFixed(1)} °C</p>
                            <p>Вологість: ${data.main.humidity}%</p>
                            <p>Швидкість вітру: ${data.wind.speed.toFixed(1)} м/с</p>
                        </div>
                    `;
      weatherResult.innerHTML = weatherInfo;
      weatherResult.style.display = 'block';
      cityInput.value = '';
    })
    .catch(error => {
      weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
      weatherResult.style.display = 'block';
    });
}