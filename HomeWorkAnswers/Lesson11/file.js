document.querySelector("#serchBtn").addEventListener("click", () => {
    const city = document.querySelector("#city").value;
    const apiKey = "422341abab9f6d33ba73fcda52bfc846";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or server issue");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Feels like: ${data.main.feels_like} °C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind speed: ${data.wind.speed} m/sec</p>
            `;
            document.querySelector("#forecast").innerHTML = weatherInfo;
        })
        .catch(error => {
            document.querySelector("#forecast").textContent = `${error.message}`;
        });
}
) 
