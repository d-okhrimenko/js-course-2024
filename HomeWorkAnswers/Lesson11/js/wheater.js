// https://www.weatherapi.com/
const apiKey = "3080f18885f04d51b9d95946242209";

function getCurrentWeather(cityName) {

    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=uk`

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                const message = `Сталася помилка при роботі з сервером: ${response.status} ${response.statusText}`;
                throw new Error(message);
            }
            return response.json();
        })
        .then(json => {
            weatherData.current.temp_c = json.current.temp_c;
            weatherData.current.conditionText = json.current.condition.text;
            weatherData.current.conditionIcon = json.current.condition.icon;
            weatherData.current.wind_kph = json.current.wind_kph;
            weatherData.current.pressure_mb = json.current.pressure_mb;
            weatherData.location.name = json.location.name;
            weatherData.location.region = json.location.region;
            weatherData.location.country = json.location.country;
            weatherData.location.lat = json.location.lat.toString();
            weatherData.location.lon = json.location.lon.toString();
            weatherData.location.tz_id = json.location.tz_id;
            weatherData.location.localtime = json.location.localtime;
        })
        .catch(error => {
            weatherData.clear();
            weatherData.queryResult = `<p>${error.message}</p>`;
        })
        .finally(e => {
            render();
            btWeather.disabled = false;
        })
        ;
}

