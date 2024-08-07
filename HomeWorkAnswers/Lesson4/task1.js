let userAnswer;
let compAnswer;
let exitGame;

do {
  userAnswer = prompt(
    "Введіть один із варіантів: камінь, ножиці або папір"
  ).toLowerCase();

  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      compAnswer = "камінь";
      break;
    case 1:
      compAnswer = "ножиці";
      break;
    case 2:
      compAnswer = "папір";
      break;
  }

  if (
    userAnswer === "камінь" ||
    userAnswer === "ножиці" ||
    userAnswer === "папір"
  ) {
    if (userAnswer !== compAnswer) {
      if (
        (userAnswer === "камінь" && compAnswer === "ножиці") ||
        (userAnswer === "ножиці" && compAnswer === "папір") ||
        (userAnswer === "папір" && compAnswer === "камінь")
      ) {
        alert(
          "Гравець обрав " +
            userAnswer +
            ", комп'ютер обрав " +
            compAnswer +
            " - виграв Гравець!"
        );
      } else {
        alert(
          "Гравець обрав " +
            userAnswer +
            ", комп'ютер обрав " +
            compAnswer +
            " - виграв комп'ютер!"
        );
      }
    } else {
      alert("Гравець та комп'ютер обрали " + userAnswer + " - Нічия!");
    }
  } else {
    alert("Ви ввели неправильне значення – спробуйте ще раз!");
  }

  exitGame = prompt(
    "Якщо ви бажаєте продовжити гру, натисніть OK, але якщо бажаєте закінчити гру, введіть: вихід"
  );
} while (exitGame === null || exitGame.toLowerCase() !== "вихід");
