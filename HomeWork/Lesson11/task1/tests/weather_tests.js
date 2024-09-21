// tests.js

import { fetchWeather } from '../../../Lesson10/task1/js/api.js';

async function testFetchWeather() {
    // Мокируем функцию fetch
    const mockFetch = async (url, options) => {
        if (url.includes('invalid-city')) {
            return { ok: false }; // Эмулируем ошибку для неверного города
        }
        return {
            ok: true,
            json: async () => ({ weather: [{ description: 'clear sky' }], main: { temp: 25 } }),
        };
    };

    // Тест успешного получения данных о погоде
    try {
        const weatherData = await fetchWeather('Moscow', null, mockFetch);
        console.assert(weatherData.weather[0].description === 'clear sky', 'Expected clear sky description');
        console.assert(weatherData.main.temp === 25, 'Expected temperature to be 25');
        console.log('Test passed: Successful weather fetch');
    } catch (error) {
        console.error('Test failed:', error);
    }

    // Тест на получение ошибки для неверного города
    try {
        await fetchWeather('invalid-city', null, mockFetch);
        console.error('Test failed: Expected error for invalid city not thrown');
    } catch (error) {
        console.assert(error.message === 'City not found or server issue', 'Expected error message for invalid city');
        console.log('Test passed: Error correctly thrown for invalid city');
    }
}

// Запускаем тесты
testFetchWeather();