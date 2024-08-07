let userInput = prompt("Введіть число")
let number = Number(userInput)
if (number % 2 === 0) {
    alert("Число " + number + " є парним.");
  } else {
    alert("Число " + number + " є непарним.");
  }