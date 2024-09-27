const dataOutput = document.getElementById('dataOutput');
const helloSmartStop = document.getElementById('helloSmartStop');
const clock = document.getElementById('clock');
let clockInterval;
let returnTimeout;

const greetingAI = 'Hello, my Main)';

function displayGreetingAI() {
  dataOutput.textContent = `${greetingAI}`;

  clearInterval(clockInterval);
  setReturnTimeout();
}

function displayFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const weekDay = today.toLocaleString('en-us', { weekday: 'short' });

  const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const leapYearMessage = isLeapYear(year) ? 'leap' : 'not a leap';

  const formattedDate = `${day} / ${month} / ${year} (${leapYearMessage}), ${weekDay}`;
  dataOutput.textContent = formattedDate;

  clearInterval(clockInterval);
}

function displayClock() {
  const today = new Date();
  const h = today.getHours();
  const m = String(today.getMinutes()).padStart(2, '0');
  const s = String(today.getSeconds()).padStart(2, '0');

  dataOutput.innerHTML = `<span class="time">${h} : ${m} : ${s}</span>`;
}

function startClock() {
  clearInterval(clockInterval);
  displayClock();
  clockInterval = setInterval(displayClock, 1000);
  setReturnTimeout();
}

function setReturnTimeout() {
  clearTimeout(returnTimeout);
  returnTimeout = setTimeout(displayFormattedDate, 10000);
}

document.addEventListener('DOMContentLoaded', displayFormattedDate);
helloSmartStop.addEventListener('click', displayGreetingAI);
clock.addEventListener('click', startClock);

/* Weather */

function createWeatherUI() {
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.id = 'cityInput';
  cityInput.classList.add('cityInput');
  cityInput.placeholder = 'Enter city';

  const getWeatherBtn = document.createElement('button');
  getWeatherBtn.id = 'getWeatherBtn';
  getWeatherBtn.classList.add('getWeatherBtn');
  getWeatherBtn.textContent = 'Get Weather';

  weatherContainer.appendChild(cityInput);
  weatherContainer.appendChild(getWeatherBtn);
  clock.parentNode.insertBefore(weatherContainer, clock.nextSibling);

  return { cityInput, getWeatherBtn };
}

const { cityInput, getWeatherBtn } = createWeatherUI();

function getWeather(city) {
  const apiKey = '05f1fe5c95b350a4fe31648442993255';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error('city not found');
      return response.json();
    })
    .then(data => {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const name = data.name;

      return `${name}: ${temp}°C, ${description}`;
    });
}

function handleWeatherRequest() {
  const cityName = cityInput.value.trim();

  if (cityName) {
    getWeather(cityName)
      .then(weather => {
        dataOutput.textContent = `${weather}`;
      })
      .catch(error => {
        dataOutput.textContent = `Error: ${cityName} - ${error.message}`;
      });
  } else {
    dataOutput.textContent = 'Please enter a city name';
  }

  cityInput.value = '';

  clearInterval(clockInterval);
  setReturnTimeout();
}

getWeatherBtn.addEventListener('click', handleWeatherRequest);

/* / Weather */

/*
1.	Отримати API ключ для сервісу погоди (наприклад, OpenWeatherMap):
	•	Зареєструватися на сайті OpenWeatherMap (або іншому погодному API) та отримати API ключ.

2.	Створити HTML-структуру:
	•	Поле для введення назви міста.
	•	Кнопку для отримання погоди.
	•	Контейнер для відображення результату.

3.	Використати fetch для запиту даних про погоду:
	•	При натисканні кнопки зробіть запит до API погоди, використовуючи fetch.
	•	Запит має бути асинхронним і використовувати Promise для обробки результату.

4.	Вивести погоду для введеного міста:
	•	Обробіть відповідь і виведіть дані на екран: назву міста, температуру, опис погоди.

5.	Обробка помилок:
	•	Додайте обробку помилок у разі неправильного запиту (наприклад, місто не знайдено або проблема з мережею).


Приклад коду який відображає погоду

const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';  // Замість YOUR_API_KEY вставте свій API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    Використання fetch для запиту до API

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
*/
