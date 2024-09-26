// спосіб 1
// document.querySelector("#getWeather").addEventListener("click", () => {
//     const city = document.querySelector("#city").value.trim();
//     if (city === "") {
//         document.querySelector("#weatherResult").innerHTML = `<p class="untitled">Введіть назву населеного пункту.</p>`;
//         return;
//     } 
    
//     const apiKey = "YOUR_API_KEY";  // Замість YOUR_API_KEY вставте свій API ключ
//     const queryGet = `?q=${city}&APPID=${apiKey}&units=metric&lang=uk`;
//     const apiHost = "https://api.openweathermap.org/data/2.5/weather"; 
//     const apiUrl = `${apiHost}${queryGet}`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Населений пункт не знайдено або проблема з сервером");
//             }
//             return response.json();
//         })
//         .then(data => {
//             const weatherInfo = `
//                 <p>Населений пункт: <span class="point-destination">${data.name}, ${data.sys.country}</span></p>
//                 <p>Швидкість вітру: ${data.wind.speed} м/с</p>
//                 <p>Пориви вітру до: ${data.wind.gust} м/с</p>
//                 <p>Температура: ${data.main.temp}\u00B0C</p>
//                 <p>Атмосферний тиск: ${data.main.pressure} гПа</p>
//                 <p>Вологість: ${data.main.humidity}%</p>
//                 <p>Опис: ${data.weather[0].description}</p>
//             `;
//             document.querySelector("#weatherResult").innerHTML = weatherInfo;
//         })
//         .catch(error => {
//             document.querySelector("#weatherResult").innerHTML = `<p class="error">${error.message}</p>`;
//         });
// });

// спосіб 2
document.querySelector("#getWeather").addEventListener("click", () => {
    const city = document.querySelector("#city").value.trim();
    if (city === "") {
        document.querySelector("#weatherResult").innerHTML = `<p class="untitled">Введіть назву населеного пункту.</p>`;
        return;
    } 

    const apiKey = "YOUR_API_KEY";  // Замість YOUR_API_KEY вставте свій API ключ
    const queryGetGeo = `?q=${city}&APPID=${apiKey}&units=metric&lang=uk`;
    const apiHostGeo = "https://api.openweathermap.org/geo/1.0/direct"; 
    const coords = `${apiHostGeo}${queryGetGeo}`;

    async function getWeather() {
        try {
            const response = await fetch(coords)
            const dataCoords = await response.json();
            if (dataCoords.length === 0) {
                throw new Error("Населений пункт не знайдено або проблема з сервером");
            } 
            
            const place = dataCoords[0];
            const state = (place.state) ? place.state + ", " : "";
            const [lat, lon] = [place.lat, place.lon];
            
            const apiHost = "https://api.openweathermap.org/data/2.5/weather";
            const queryGet = `?lat=${lat}&lon=${lon}&units=metric&lang=ua&APPID=${apiKey}`;
            const apiUrl = `${apiHost}${queryGet}`;
        
            const responseWeather = await fetch(apiUrl);
            const data = await responseWeather.json();
            
            const weatherInfo = `
                <p>Населений пункт: <span class="point-destination">${data.name}, ${state}${data.sys.country}</span></p>
                <p>Швидкість вітру: ${data.wind.speed} м/с</p>
                <p>Пориви вітру до: ${data.wind.gust} м/с</p>
                <p>Температура: ${data.main.temp}\u00B0C</p>
                <p>Атмосферний тиск: ${data.main.pressure} гПа</p>
                <p>Вологість: ${data.main.humidity}%</p>
                <p>Опис: ${data.weather[0].description}</p>
            `;
            document.querySelector("#weatherResult").innerHTML = weatherInfo;
            
        } catch (error) {
            document.querySelector("#weatherResult").innerHTML = `<p class="error">${error.message}</p>`;
        } 
    }
    getWeather();
});  
