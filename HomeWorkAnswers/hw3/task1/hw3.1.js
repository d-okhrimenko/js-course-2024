let input = prompt("Введіть число:");

let number = Number(input);

if (isNaN(number)) {
  alert("Ви ввели некоректне число. Спробуйте ще раз.");
} else {
  if (number % 2 === 0) {
    alert("Число парне.");
  } else {
    alert("Число непарне.");
  }
}
