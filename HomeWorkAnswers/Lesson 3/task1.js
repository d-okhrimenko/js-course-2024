let inputNumber;

function input() {
  inputNumber = +prompt("Введіть число");
  isNaN(inputNumber) ? input() : inputNumber;
}

input();

inputNumber % 2 === 0
  ? alert("Число " + inputNumber + " парне")
  : alert("Число " + inputNumber + " непарне");
