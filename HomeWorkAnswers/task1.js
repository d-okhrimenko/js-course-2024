let input = prompt("Введіть число:");
let number = parseInt(input);
if (isNaN(number)) {
  alert("Будь ласка, введіть коректне число.");
} else {
  if (number % 2 === 0) {
    alert("Число " + number + " є парним.");
  } else {
    alert("Число " + number + " є непарним.");
  }
}
