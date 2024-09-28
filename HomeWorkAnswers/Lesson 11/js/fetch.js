document.getElementById('weather').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    const apiKey = '03928dd2e8a860bc3f39e7999a11487a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;
    const loader = document.getElementById('loader');
    loader.style.display = 'inline-block';
    
    // Використання fetch для запиту до API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Місто не знайдено або проблема з сервером');
            }
            return response.json();
        })
        .then(data => {
            const visibility = parseFloat(data.visibility) / 1000;
            const weatherInfo = `
                        <h1>Погода у місті: ${data.name}</h1>
                        <h3>Температура: ${data.main.temp}°C, Вологість: ${data.main.humidity}%</h3>
                        <h3>Тиск: ${data.main.pressure}Pa, Вітер: ${data.wind.speed}m/s</h3>
                        <h3>Видимість: ${visibility}km, ${data.weather[0].description}</h3>
                    `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        })
        .finally(() => {
        loader.style.display = 'none';
        })
});