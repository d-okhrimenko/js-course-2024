function requestWeather(apiKey, city, htmlElement) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Населений пункт ${city} не знайдено або проблема з сервером`);
      }
      return response.json();
    })
    .then((data) => {
      render(data, htmlElement);
    })
    .catch((error) => {
      document.getElementById(htmlElement.id).innerHTML = `<p class="error">${error.message}</p>`;
    });
}
