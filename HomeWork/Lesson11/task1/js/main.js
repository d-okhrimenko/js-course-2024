import { fetchWeather } from './api.js';

document.getElementById('fetchWeatherButton').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value.trim();

    if (!city) {
        console.error("Пожалуйста, введите название города");
        return;
    }

    const abortController = new AbortController();
console.log(city);
    try {
        console.log("Запрашиваем погоду для города:", city);
        const weatherData = await fetchWeather(city, abortController.signal);
        displayWeather(weatherData);

        console.log(weatherData);

        // Reset button functionality
        document.getElementById('resetButton').onclick = () => abortController.abort();

    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p class="error">${error.message}</p>`;
    } finally {
        // Очистка поля ввода после завершения поиска
        document.getElementById('cityInput').value = '';
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('cityInput').value = '';
    document.getElementById('weatherResult').innerHTML = '';
});


// Функция для получения отформатированной даты
function getFormattedDate(timestamp) {
    const date = new Date(timestamp * 1000); // Преобразуем временную метку в миллисекунды
    // Форматируем дату
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleString('ru-RU', options); // Форматируем для русского языка
}


function displayWeather(data) {
    const weatherIcon = data.weather[0].icon; // Получение кода иконки погоды
    const weatherInfo = `
        <h2>Погода в городе: ${data.name}</h2>
        <h2>Дата : ${ (getFormattedDate(data.dt)).replace(/в/g, "на")}</h2>
        <p>Видимость: ${(data.visibility)/1000} км.</p>
        <p>Скорость ветра: ${data.wind.speed} метров в секунду</p>
        <p>Температура: ${data.main.temp} °C</p>
        <p>Описание: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Иконка погоды">
    `;

    const resultContainer = document.getElementById('weatherResult');
    resultContainer.innerHTML = weatherInfo;
    resultContainer.classList.remove('hidden');
}