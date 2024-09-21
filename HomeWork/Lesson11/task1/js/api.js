// weather.js

let config;

async function loadConfig() {
    const response = await fetch('./data/config.json');
    if (!response.ok) {
        throw new Error('Failed to load configuration');
    }
    config = await response.json();
}

// Функция для получения погоды
export async function fetchWeather(city, signal) {
    // Убедитесь, что конфигурация загружена
    if (!config) {
        await loadConfig();
    }

    const url = `${config.apiUrl}?q=${city}&appid=${config.apiKey}&units=${config.units}&lang=${config.lang}`; // Формируем правильный URL

    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error('City not found or server issue');
    }

    return await response.json();
}