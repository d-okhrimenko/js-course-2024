document.getElementById('btn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const apiKey = 'dd86cc9120b39272bcad589d58743be4';  // Замість YOUR_API_KEY вставте свій API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    // Використання fetch для запиту до API
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
        document.getElementById('result').innerHTML = weatherInfo;
      })
      .catch(error => {
        document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
      });
  });