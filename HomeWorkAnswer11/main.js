const apiKey = '23f24f520c795a7f1b7039eba243449d';
const weatherForm = document.querySelector("#weatherID");
const cityInput = document.querySelector("#cityInput");
const result = document.querySelector(".result");
let cityName = document.createElement("p");
let temperature = document.createElement("p");
let description = document.createElement("p");

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;
    const weatherRes = fetch(apiUrl);
    weatherRes
        .then(res => res.json())
        .then(json => {
            if (json.cod == 200) {
                result.innerHTML = "";
                cityName.innerText = `City - ${json.name}`;
                temperature.innerText = `Temperature - ${json.main.temp}`;
                description.innerText = `Today is ${json.weather[0].main.toLowerCase()}`;
                result.append(cityName, temperature, description);
            } else {
                result.innerHTML = json.message;
            }
        });
}

weatherForm.addEventListener("submit", e => {
    e.preventDefault();
    getWeather(cityInput.value)
});
