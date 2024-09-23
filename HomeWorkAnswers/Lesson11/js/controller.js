let element = document.querySelector("#weatherResult");

const requestForm = document.querySelector("#requestForm");

const cityInput = document.querySelector("#cityInput");

const apiKey = "43b774d7f1c923a8a68778fe39b177c6";

requestForm.addEventListener("submit", function (e) {
  e.preventDefault();

  requestWeather(apiKey, cityInput.value, element);

  cityInput.value = "";
});
