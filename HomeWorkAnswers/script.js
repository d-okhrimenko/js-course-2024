document.getElementById("getWeatherBtn").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;
    const apiKey = "d0a691957490f049ad344990409f0d1c"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Місто не знайдено або проблема з сервером");
        }
        return response.json();
      })
      .then((data) => {
        const weatherInfo = `
          <h2>Погода у місті: ${data.name}</h2>
          <p>Температура: ${data.main.temp} °C</p>
          <p>Опис: ${data.weather[0].description}</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherInfo;
      })
      .catch((error) => {
        document.getElementById(
          "weatherResult"
        ).innerHTML = `<p>${error.message}</p>`;
      });
  });
  