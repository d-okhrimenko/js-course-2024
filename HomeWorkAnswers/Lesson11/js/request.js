function requestWeather(apiKey, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Місто не знайдено або проблема з сервером");
      }
      return response.json();
    })
    .then((data) => {
      render(data, element);
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `<p class="error">${error.message}</p>`;
    });
}
