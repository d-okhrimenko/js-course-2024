const userChoice = prompt("Виберіть: камінь, ножиці або папір?").toLowerCase();

const computerChoices = ["камінь", "ножиці", "папір"];
const computerChoice =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

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

alert(result);
let totalRounds = 0;
let userWins = 0;
let computerWins = 0;

while (true) {
  const userChoice = prompt(
    "Виберіть: камінь, ножиці або папір (або 'вихід' для завершення гри):"
  ).toLowerCase();

  if (userChoice === "вихід") {
    break; // Вихід з гри
  }

  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

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

alert(`Загальний рахунок: Ви ${userWins} : ${computerWins} Комп'ютер`);
