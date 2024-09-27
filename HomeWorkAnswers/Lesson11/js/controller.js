let outlook = document.querySelector("#Outlook");
let information = document.querySelector("#Information");
let templateOutlook = document.querySelector("#templateOutlook").innerHTML;
let templateInformation = document.querySelector("#templateInformation").innerHTML;
let cityName = document.querySelector("#cityName");
let btWeather = document.querySelector("#btWeather");
let queryResult = document.querySelector("#queryResult");

function render() {
    weatherOutlook.renderWithTemplate(weatherData.current, outlook, templateOutlook);
    cityInformation.renderWithTemplate(weatherData.location, information, templateInformation);
    renderResult(weatherData.queryResult, queryResult);
}

btWeather.addEventListener("click", function () {
    btWeather.disabled = true;
    weatherData.queryResult="";
    if (cityName.value) {
        getCurrentWeather(cityName.value);
    } else {
        weatherData.clear();
        weatherData.queryResult="Необхідно заповнити назву міста!";
        render();
        btWeather.disabled = false;
    }
    
    
})


render();