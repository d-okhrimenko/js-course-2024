const apiKey = "7bb895dd73c4c9ed8e479a6fd33d1a8a";
let submit = document.querySelector("#submit");
let weatherResult = document.querySelector("#weatherResult");

submit.addEventListener("click", getWeather);

function getWeather(e){
    e.preventDefault();

    let city = document.querySelector("#city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

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
}