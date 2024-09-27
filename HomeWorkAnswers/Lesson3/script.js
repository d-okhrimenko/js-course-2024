/* Lesson 3 Task 1 */

let value1 = prompt('Enter a number');
let number1 = parseInt(value1);
let isValueNaN = Number.isNaN(number1);

if (isValueNaN) {
  alert(`${value1} - error, not a number entered`);
} else if (number1 % 2 === 0) {
  alert(`${number1} - even number`);
} else {
  alert(`${number1} - odd number`);
}

/* Lesson 3 Task 2 Modified the function displayFormattedDate() */

/* Lesson 3 Task 3 */

let valueYear = prompt('Enter a year');
let numberYear = Number(valueYear);

if (isNaN(numberYear) || numberYear <= 0) {
  alert('The entered value is not a valid year');
} else {
  if (
    (numberYear % 4 === 0 && numberYear % 100 !== 0) ||
    numberYear % 400 === 0
  ) {
    alert('The year is a leap year');
  } else {
    alert('The year is not a leap year');
  }
}

/* Lesson 2 and personal tasks */

const dataOutput = document.getElementById('dataOutput');
const airTemperature = document.getElementById('airTemperature');
const helloSmartStop = document.getElementById('helloSmartStop');
const greetingAI = `Hello, my Main)`;

function displayFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  // const weekDay = today.toLocaleString('en-us', { weekday: 'long' });
  const weekDayOption2 = today.getDay();

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let leapYearMessage = '';
  leapYearMessage = isLeapYear(year) ? 'leap' : 'not a leap';

  const formattedDate = `${day} / ${month} / ${year} ${
    leapYearMessage ? `(${leapYearMessage}),` : ''
  } ${dayNames[weekDayOption2]}`;

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
