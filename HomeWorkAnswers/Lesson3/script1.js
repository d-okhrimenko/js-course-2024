function checkEvenOdd() {
  const userInput = prompt("Введіть число:");
  console.log({ userInput });
  const number = parseInt(userInput, 10);
  if (isNaN(number)) {
    alert("Будь ласка, введіть коректне число.");
    return;
  }

  if (number % 2 === 0) {
    alert(`Число ${number} є парним.`);
    return;
  }
  alert(`Число ${number} є непарним.`);
  return;
}
