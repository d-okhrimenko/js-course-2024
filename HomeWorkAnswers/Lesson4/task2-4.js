// Завдання 2
// Гра: "Математичний квіз"

let firstNumber;
let secondNumber;
let operator;
let rightAnswersCounter = 0;
let wrongAnswersCounter = 0;
let answer;
let counter = 0;
let randomOperator;

function getRandomOperator() {
  let arr = new Array("+", "-", "*", "/");
  randomOperator = arr[Math.floor(Math.random() * (arr.length - 1 - 0 + 1))];
}

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min) + min);
}

const OPMAP = {
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "/": (firstNumber, secondNumber) => (firstNumber / secondNumber).toFixed(1),
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
};

do {
  operator = getRandomOperator();
  firstNumber = getRandomInt();
  secondNumber = getRandomInt();

  console.log(firstNumber + " " + randomOperator + " " + secondNumber);

  userNumber = +prompt("Введіть правильну відповідь");
  answer = OPMAP[randomOperator](firstNumber, secondNumber);
  console.log(answer);
  IsAnswerCorrect();

  counter = counter + 1;
} while (counter < 10);

function IsAnswerCorrect() {
  if (answer == userNumber) {
    rightAnswersCounter++;
    alert("Вірно!");
  } else {
    wrongAnswersCounter++;
    alert("Помилка!");
  }
}

console.log(rightAnswersCounter + " - правильних відповідей");
console.log(wrongAnswersCounter + " - НЕправильних відповідей");
