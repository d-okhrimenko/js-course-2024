let apiKey = "f9bf9022635c51c3dcaf8c0fc773c346";

async function getWeatherForm(event){
    event.preventDefault();

    let city = event.target['city'].value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;
    
    try{
        let response = await fetch(apiUrl);
        let json = await response.json();
        displayWeatherInfo(json);
    }
    catch{
        document.getElementById('weatherResult').innerHTML = 'Місто не знайдено або проблема з сервером';
    }
}

function displayWeatherInfo(data){
    const weatherInfo = `
        <h2>Погода у місті: ${data.name}</h2>
        <p>Температура: ${data.main.temp} °C</p>
        <p>Опис: ${data.weather[0].description}</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherInfo;
}
