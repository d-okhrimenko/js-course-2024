// Завдання 1
// Написати програму, яка обчислює індекс маси тіла (ІМТ) і дає рекомендації на основі отриманого значення.

function getNumericValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
  }
}

let userHeight = getNumericValue("Введіть ваш зріст в сантиметрах") / 100;
let userWeight = getNumericValue("Введіть вашу вагу в кілограмах");

let getImt = () => userWeight / Math.pow(userHeight, 2);

// function getImt() {
//   return userWeight / Math.pow(userHeight, 2);
// }

let imt = getImt();
console.log(userHeight);
console.log(userWeight);
console.log(imt);

if (imt < 18.5) {
  alert("Недостатня вага");
} else if (18.5 <= imt && imt < 24.9) {
  alert("Нормальна вага");
} else if (25 <= imt && imt < 29.9) {
  alert("Надмірна вага");
} else if (imt >= 30) {
  alert("Ожиріння");
}
