document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const geoUrl = `https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1`;

    try {
        // Отримуємо координати міста
        const geoResponse = await fetch(geoUrl);
        if (!geoResponse.ok) {
            throw new Error('Не вдалося знайти місто');
        }
        const geoData = await geoResponse.json();
        if (geoData.length === 0) {
            throw new Error('Місто не знайдено');
        }

        const { lat, lon } = geoData[0];
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;

        // Отримуємо погоду
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('Помилка при отриманні даних про погоду');
        }
        const weatherData = await weatherResponse.json();

        const weatherInfo = `
            <h2>Погода у місті: ${city}</h2>
            <p>Температура: ${weatherData.current.temperature_2m} °C</p>
            <p>Швидкість вітру: ${weatherData.current.wind_speed_10m} м/с</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
});


