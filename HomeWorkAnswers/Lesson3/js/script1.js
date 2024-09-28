const inputNumber = Number(prompt("Введіть будь-яке число"));

if (isNaN(inputNumber)) {
  alert("ВВедені дані- не число");
} else if (inputNumber % 2 === 0) {
  alert("Число парне");
} else {
  alert("Число непарне");
}
