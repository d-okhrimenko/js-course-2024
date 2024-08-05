let number = prompt("Введіть ваше число");
number = parseInt(number);
if (!isNaN(number)) {
  if (number % 2 === 0) alert("Число парне");
  else alert("Число не парне");
}
