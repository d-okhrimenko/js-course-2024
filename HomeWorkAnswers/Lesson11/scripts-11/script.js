const useCity = document.getElementById("use-city");
const useCoords = document.getElementById("use-coords");
const useCurrent = document.getElementById("use-current");
const cityInput = document.getElementById("city");
const latInput = document.getElementById("lat");
const lonInput = document.getElementById("lon");
const apiKey = "55fde17189b32d9982f3f1a57bd9fc99";

// const lat = 51.5085;// for testing
// const lon = -0.1257;
const userLang = `{navigator.language}`;

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${userLang}`;

// const coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${userLang}`;

//////////////////////////////////////////////////////////////

function clearHtml(element) {
  element.innerHTML = "";
}

async function displayWeatherData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`⛔ HTTP Request error❗ Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const { weather, main, wind } = data;
    console.log(weather);
    console.log(main);
    console.log(wind);
    // return data;
    renderWeather(data);
  } catch (error) {
    console.log(error.message);
    alert(`⛔ Error fetching weather data: ${error.message}`);
  }
}
// displayWeatherData(coordsUrl);// testing

function renderWeather(data) {
  const city = cityInput.value;
  console.log(city);
  const { weather, main, wind, visibility } = data;
  const parentEl = document.getElementById("output");
  const html = `
            <section class="weather">
              <p>City: <span class="city">${city ? city : "Unknown"}</span></p>
              <p>Temperature: <span class="temp">${main.temp}</span>°C</p>
              <p>Humidity: <span class="humidity">${main.humidity}</span>%</p>
              <p>Pressure: <span class="pressure">${main.pressure}</span>mm Hg</p>
              <p>Description: <span class="description">${weather[0].description}</span></p>
              <p>Wind direction: <span class="wind">${wind.deg}</span>°</p>
              <p>Wind speed: <span class="wind">${wind.speed} </span>m/s</p>
              <p>Visibility: <span class="visibility">${visibility} </span>m</p>
            </section>
  `;
  clearHtml(parentEl);
  parentEl.insertAdjacentHTML("beforeend", html);
}

// Get Current Coordinates

async function getCoords() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    console.log(position.coords);
    return position.coords;
  } catch (error) {
    throw new Error(`⛔ Error getting coordinates: ${error.message}`);
  }
}

useCity.addEventListener("click", () => {
  const city = cityInput.value;
  if (!city) {
    alert(`⛔ Please enter city name ❗`);
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${userLang}`;

  displayWeatherData(apiUrl);
});

useCoords.addEventListener("click", () => {
  const lat = latInput.value;
  const lon = lonInput.value;
  console.log(typeof lat, typeof lon);

  if (!lat || !lon) {
    alert("⛔ Please enter latitude and longitude coordinates ❗");
    return;
  }
  if (isNaN(lat) || isNaN(lon)) {
    alert("⛔ Please enter valid coordinates ❗");
    return;
  }

  const coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${userLang}`;

  displayWeatherData(coordsUrl);
});

useCurrent.addEventListener("click", async () => {
  try {
    const coords = await getCoords();
    const { latitude: lat, longitude: lon } = coords;
    const coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${userLang}`;
    displayWeatherData(coordsUrl);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
});

useCurrent.addEventListener("click", () => {
  const inputs = [cityInput, latInput, lonInput];
  inputs.forEach((el) => (el.value = ""));
});

cityInput.addEventListener("input", () => {
  console.log(cityInput.value);
  latInput.value = "";
  lonInput.value = "";
});

latInput.addEventListener("input", () => {
  cityInput.value = "";
});

lonInput.addEventListener("input", () => {
  cityInput.value = "";
});
