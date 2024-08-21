// Запит вибору користувача
const userChoice = prompt("Виберіть: камінь, ножиці або папір?") .toLowerCase();

// Генерація випадкового вибору комп'ютера
const computerChoices = ["камінь", "ножиці", "папір"];
const computerChoice =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Визначення переможця
let result;
if (userChoice === computerChoice) {
  result = "Нічия!";
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  result = `Ви перемогли! Комп'ютер обрав ${computerChoice}.`;
} else {
  result = `Ви програли! Комп'ютер обрав ${computerChoice}.`;
}

// Виведення результату
alert(result);
let totalRounds = 0;
let userWins = 0;
let computerWins = 0;

while (true) {
  // Запит вибору користувача
  const userChoice = prompt(
    "Виберіть: камінь, ножиці або папір (або 'вихід' для завершення гри):"
  ). toLowerCase();

  if (userChoice === "вихід") {
    break; // Вихід з гри
  }

  // Генерація випадкового вибору комп'ютера
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Визначення переможця
  let result;
  if (userChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    result = `Ви перемогли! Комп'ютер обрав ${computerChoice}.`;
    userWins++;
  } else {
    result = `Ви програли! Комп'ютер обрав ${computerChoice}.`;
    computerWins++;
  }

  totalRounds++;
  alert(result);
}

// Виведення загального рахунку
alert(`Загальний рахунок: Ви ${userWins} : ${computerWins} Комп'ютер`);
