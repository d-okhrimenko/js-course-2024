// Завдання 1
// Написати програму, яка аналізує список оцінок студентів і знаходить середній бал,
//найвищу та найнижчу оцінки.

let scores = [];
let i = 0;

do {
  i++;
  let value = Number(prompt("Введіть оцінки студентів"));
  scores.push(value);
} while (i < 5);

function average(array) {
  let sum = 0;
  let average = 0;
  for (const value of array) {
    sum += value; // sum = sum + value;
    average = sum / scores.length;
  }
  return average;
}

function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}

alert(
  `Cередній бал - ${average(scores)}; найвища оцінка - ${max(
    scores
  )}; найнижча оцінка - ${min(scores)}`
);

console.log("Cередній бал: " + average(scores));
console.log("Найнижча оцінка: " + min(scores));
console.log("Найвища оцінка: " + max(scores));

console.log("Ви ввели " + scores.length + " оцінок: ");
scores.forEach((x) => console.log(x));
