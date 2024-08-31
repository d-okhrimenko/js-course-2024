document.getElementById("startGame").addEventListener("click", function () {
  let userScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    const userChoice = prompt(
      'Введіть свій вибір: камінь, ножиці або папір. Введіть "вихід" для завершення гри.'
    );

    if (userChoice === "вихід") {
      break;
    }

    const choices = ["камінь", "ножиці", "папір"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
      result = "Нічия!";
    } else if (
      (userChoice === "камінь" && computerChoice === "ножиці") ||
      (userChoice === "ножиці" && computerChoice === "папір") ||
      (userChoice === "папір" && computerChoice === "камінь")
    ) {
      result = "Ви виграли!";
      userScore++;
    } else if (
      (userChoice === "камінь" && computerChoice === "папір") ||
      (userChoice === "ножиці" && computerChoice === "камінь") ||
      (userChoice === "папір" && computerChoice === "ножиці")
    ) {
      result = "Комп’ютер виграв!";
      computerScore++;
    } else {
      result = "Неправильний вибір!";
    }

    alert(
      `Ваш вибір: ${userChoice}\nВибір комп’ютера: ${computerChoice}\n${result}`
    );
  }

  const finalResult =
    userScore > computerScore
      ? "Ви виграли гру!"
      : userScore < computerScore
      ? "Комп’ютер виграв гру!"
      : "Гра закінчилася внічию!";
  document.getElementById(
    "result"
  ).innerText = `Рахунок: Ви ${userScore} - ${computerScore} Комп'ютер\n${finalResult}`;
});
