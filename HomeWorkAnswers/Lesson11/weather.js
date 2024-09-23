const city = document.querySelector("#city");
const result = document.querySelector("#result");
const cityForm = document.querySelector("#cityForm");

const apiKey = '92d31e4c956bb6961ab6deaea5acd85f';

function clearResult() {
    result.innerHTML = '';
}

cityForm.addEventListener("submit", async function getWeather(e) {
    e.preventDefault();
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();

        const weatherInfo = `
            <h2>The weather in the ${city.value}</h2>
            <p>Temperature: ${data.main.temp} °C.</p>
            <p>Humidity: ${data.main.humidity}.</p>
            <p>Description: ${data.weather[0].description}.</p>
            `;
        result.innerHTML = weatherInfo;
    }
    catch (e) {
        const weatherInfo = `
            <h2>The weather in the ${city.value}</h2>
            <p>Error: ${e.message}</p>
            `;
        result.innerHTML = weatherInfo;
    }
})