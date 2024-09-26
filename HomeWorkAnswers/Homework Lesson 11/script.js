document.getElementById("getForecast").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const apiUrl = `https://wttr.in/${city}?format=%C+%t`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found or server error!");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("weatherResult").innerHTML = `<p>Weather in ${city}: ${data}</p>`;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
});
