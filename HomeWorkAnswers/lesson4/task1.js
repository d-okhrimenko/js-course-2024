document.querySelector("#btn").onclick = function () {
  let counter = Number(prompt("Скільки бажаєте розігришів в мітчі?"));
  let countUser = 0;
  let countRandom = 0;
  for (i = 0; i < counter; i++) {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let userChoice = prompt(
      'Введіть свій вибір! Або "вихід" для закінчення гри.',
      "камінь, ножиці, бумага"
    );
    if (userChoice == "вихід") {
      break;
    }
    switch (randomChoice) {
      case 1:
        //вибір комп'ютера - камінь
        if (userChoice == "камінь") {
          alert("Перможця не визначено!");
        } else if (userChoice == "ножиці") {
          countRandom += 1;
          alert("Переміг я!!!");
        } else if (userChoice == "бумага") {
          countUser += 1;
          alert("Тимчасово перемогли Ви!!!");
        }
        break;
      case 2:
        //  вибір комп'ютера - ножиці
        if (userChoice == "камінь") {
          alert("Тимчасово перемогли Ви!!!");
          countUser += 1;
        } else if (userChoice == "ножиці") {
          alert("Перможця не визначено!");
        } else if (userChoice == "бумага") {
          countRandom += 1;
          alert("Переміг я!!!");
        }
        break;
      case 3:
        // вибір комп'ютера - бумага
        if (userChoice == "камінь") {
          alert("Переміг я!!!");
          countRandom += 1;
        } else if (userChoice == "ножиці") {
          countUser += 1;
          alert("Тимчасово перемогли Ви!!!");
        } else if (userChoice == "бумага") {
          alert("Перможця не визначено!");
        }
        break;
      default:
        alert("Введіть свій вибір вірно.");
    }
  }
  // if (randomChoice > 1 && randomChoice <= 34) {
  //   //вибір комп'ютера - камінь
  //   if (userChoice == "камінь") {
  //     alert("Перможця не визначено!");
  //   } else if (userChoice == "ножиці") {
  //     countRandom += 1;
  //     alert("Переміг я!!!");
  //   } else if (userChoice == "бумага") {
  //     countUser += 1;
  //     alert("Тимчасово перемогли Ви!!!");
  //   }
  // } else if (randomChoice > 34 && randomChoice <= 67) {
  //   //  вибір комп'ютера - ножиці
  //   if (userChoice == "камінь") {
  //     alert("Тимчасово перемогли Ви!!!");
  //     countUser += 1;
  //   } else if (userChoice == "ножиці") {
  //     alert("Перможця не визначено!");
  //   } else if (userChoice == "бумага") {
  //     countRandom += 1;
  //     alert("Переміг я!!!");
  //   }
  // } else if (randomChoice < 67 && randomChoice <= 100) {
  //   // вибір комп'ютера - бумага
  //   if (userChoice == "камінь") {
  //     alert("Переміг я!!!");
  //     countRandom += 1;
  //   } else if (userChoice == "ножиці") {
  //     countUser += 1;
  //     alert("Тимчасово перемогли Ви!!!");
  //   } else if (userChoice == "бумага") {
  //     alert("Перможця не визначено!");
  //   }
  // } else {
  //   alert("Введіть свій вибір вірно.");
  // }

  alert("Гру закінчено!");
  if (countRandom > countUser) {
    myGame.innerHTML = `Вітаю! ${countRandom} проти ${countUser} переміг я!`;
    myGame.style.color = "blue";
  } else if (countRandom < countUser) {
    myGame.innerHTML = `Вітаю! ${countUser} проти ${countRandom} перемогли Ви!`;
    myGame.style.color = "green";
  } else {
    myGame.innerHTML = "Вітаю! Ми однаково спритні!";
    myGame.style.color = "red";
  }
};
