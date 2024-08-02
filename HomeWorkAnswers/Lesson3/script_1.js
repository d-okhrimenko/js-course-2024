let input = prompt("Введіть число:");

let number = parseInt(input, 10);

// Перевірка на коректність введеного числа
if (isNaN(number)) {
  alert("Invalid input. Please enter correct number.");
} else {
  if (number % 2 === 0) {
    alert("Entered number is EVEN.");
  } else {
    alert("Entered number is ODD.");
  }
}