# Weather App

This is a simple weather application that allows users to get current weather information for any city.


## Project Structure

    weather-app/
    │
    ├── index.html
    ├── /css/style.css
    ├── /js/main.js
    ├── /tests/weather_tests.js
    ├── config.js(not used)
    ├── /data/config.json
    ├── .env(not used)
    └── README.md



## Features

- Fetches current weather data based on city name.
- Uses OpenWeatherMap API to retrieve weather information.
- Configuration parameters (API key, units, language) are stored in a separate `config.json` file.
- Supports metric units and Russian language for responses.

## Prerequisites

- A web browser (e.g., Chrome, Firefox).
- An internet connection to access the OpenWeatherMap API.
- A valid API key from OpenWeatherMap. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).

## Installation

1. Clone this repository or download the ZIP file.

   ```bash
   git clone https://github.com/yourusername/weather-fetching-app.git

#### Navigate to the project directory.
~~~bash
cd weather-fetching-app
~~~~
Open index.html in your web browser or use a local server (e.g., Live Server extension in VSCode) to serve the files.
Configuration
Create a config.json file in the root of the project directory with the following content:
````json
{
"apiKey": "YOUR_API_KEY_HERE",
"apiUrl": "https://api.openweathermap.org/data/2.5/weather",
"units": "metric",
"lang": "ru"
}
````
Replace YOUR_API_KEY_HERE with your actual OpenWeatherMap API key.
Usage
Enter the name of the city in the input field provided in the application.
Click on the button to fetch the weather data.
The current weather information will be displayed on the screen.
### Example
~~~~javascript
// Example usage of fetchWeather function
import { fetchWeather } from './weather.js';

const city = 'Одесса';
fetchWeather(city)
.then(data => console.log(data))
.catch(error => console.error('Error fetching weather data:', error));
~~~~
License
This project is licensed under the MIT License - see the LICENSE file for details.