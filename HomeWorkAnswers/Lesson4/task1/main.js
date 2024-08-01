let rounds = 5;
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < rounds; i++) {
  let choice = prompt(
    `Раунд ${i + 1}/${rounds}. Введіть значення: 1.Камінь 2.Ножиці 3.Папір`
  );
  let choiceHuman = choice.toLowerCase().trim();

  let choices = ["камінь", "ножиці", "папір"];

  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomIndex];

  console.log(`Раунд ${i + 1}:`);
  console.log("Ваш вибір: " + choiceHuman);
  console.log("Вибір комп'ютера: " + randomChoice);

  if (choiceHuman === randomChoice) {
    alert("Нічия!");
  } else if (
    (choiceHuman === "камінь" && randomChoice === "ножиці") ||
    (choiceHuman === "ножиці" && randomChoice === "папір") ||
    (choiceHuman === "папір" && randomChoice === "камінь")
  ) {
    alert("Ви виграли!!!");
    playerScore++;
  } else if (
    (choiceHuman === "ножиці" && randomChoice === "камінь") ||
    (choiceHuman === "папір" && randomChoice === "ножиці") ||
    (choiceHuman === "камінь" && randomChoice === "папір")
  ) {
    alert("Виграв компьютер!!!");
    computerScore++;
  } else {
    alert("Невірне введення. Цей раунд пропущено.");
    i--; // Повторити раунд
    continue;
  }
}

alert(
  `Гра закінчена! Фінальний рахунок: Ви ${playerScore} - ${computerScore} Комп'ютер`
);
if (playerScore > computerScore) {
  alert("Вітаємо! Ви перемогли в грі!");
} else if (playerScore < computerScore) {
  alert("На жаль, комп'ютер переміг. Спробуйте ще раз!");
} else {
  alert("Нічия! Чудова гра!");
}
