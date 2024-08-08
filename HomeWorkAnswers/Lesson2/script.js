const dataOutput = document.getElementById('dataOutput');
const airTemperature = document.getElementById('airTemperature');
const helloSmartStop = document.getElementById('helloSmartStop');
const greetingAI = `Hello, my Main)`;

function displayFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day} / ${month} / ${year}`;

  dataOutput.textContent = formattedDate;
}

function displayGreetingAI() {
  dataOutput.textContent = `${greetingAI}`;
}

function displayTemperature() {
  let temperature = '40°C';

  dataOutput.textContent = `${temperature}`;
}

document.addEventListener('DOMContentLoaded', displayFormattedDate);
airTemperature.addEventListener('click', displayTemperature);
helloSmartStop.addEventListener('click', displayGreetingAI);
