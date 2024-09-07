// Генерація випадкового вибору комп'ютера
function getComputerChoice() {
  const choices = ["камінь", "ножиці", "папір"];
  return choices[Math.floor(Math.random() * 3)];
}

// Визначення переможця
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    result = "Ви виграли!";
  } else {
    result = "Комп'ютер виграв!";
  }

  // Виведення результату
  document.getElementById(
    "result"
  ).innerText = `Ви вибрали: ${userChoice}, Комп'ютер вибрав: ${computerChoice}. ${result}`;
}
