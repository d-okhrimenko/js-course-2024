// Завдання 1

// Гра: "Камінь, ножиці, папір"

// Опис гри:
// Користувач грає проти комп'ютера в класичну гру "Камінь, ножиці, папір".
// Програма запитує вибір користувача, генерує випадковий вибір для комп'ютера, визначає переможця та виводить результат.

// Кроки для виконання завдання:

// 1. Введення вибору користувача:
//    - Використайте `prompt` для запиту вибору користувача (камінь, ножиці, папір).

// 2. Генерація вибору комп'ютера:
//    - Використайте `Math.random()` для випадкового вибору між каменем, ножицями і папером.

// 3. Визначення переможця:
//    - Використайте умовні конструкції для визначення переможця за правилами гри:
//      - Камінь б'є ножиці.
//      - Ножиці б'ють папір.
//      - Папір б'є камінь.
//      - Однакові вибори - нічия.

// 4. Виведення результату:
//    - Використайте `alert` для виведення вибору користувача, вибору комп'ютера та результату гри.

// Додаткові завдання:
// 1. Додати можливість гри кілька раундів з підрахунком загального рахунку.
// 2. Додати можливість користувачеві вийти з гри за допомогою спеціальної команди (наприклад, введення "вихід")

let userNumber;
let robotNumber;
let userCounter = 0;
let robotCounter = 0;
let counter = 0;
let displayRobotChoice;
let displayUserChoice;
let draw = "В цьому раунді нічия";
let rockWinScissors = "Камінь б'є ножиці";
let scissorsWinPaper = "Ножиці б'ють папір";
let paperWinRock = "Папір б'є камінь";

do {
  userNumber = +prompt("Камінь(1), ножиці(2), папір(3)! Зробіть свій вибір.");
  robotNumber = getRandomInt();

  compareNumbers();
  displayResult();

  console.log(
    "Вибір користувача: " +
      displayUserChoice +
      "; " +
      "Вибір робота: " +
      displayRobotChoice
  );
  console.log(
    "Рахунок користувача: " +
      userCounter +
      "; " +
      "Рахунок робота: " +
      robotCounter +
      "; "
  );

  counter = counter + 1;
} while (counter < 10);

if (userCounter > robotCounter) {
  alert("Кінець гри. Виграв користувач!");
} else if (userCounter < robotCounter) {
  alert("Кінець гри. Виграв робот!");
} else if ((userCounter = robotCounter)) {
  alert("Кінець гри. Нічия!");
}

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min);
}

function userWin() {
  userCounter++;
  alert("Раунд виграв користувач");
}
function robotWin() {
  robotCounter++;
  alert("Раунд виграв робот");
}

function compareNumbers() {
  if (userNumber == 1) {
    if (userNumber == robotNumber) {
      alert(draw);
    } else if (userNumber == 1 && robotNumber == 2) {
      userWin();
      console.log(rockWinScissors);
    } else {
      robotWin();
      console.log(paperWinRock);
    }
  }
  if (userNumber == 2) {
    if (userNumber == robotNumber) {
      alert(draw);
    } else if (userNumber == 2 && robotNumber == 3) {
      userWin();
      console.log(scissorsWinPaper);
    } else {
      robotWin();
      console.log(rockWinScissors);
    }
  }
  if (userNumber == 3) {
    if (userNumber == robotNumber) {
      alert(draw);
    } else if (userNumber == 3 && robotNumber == 1) {
      userWin();
      console.log(paperWinRock);
    } else {
      robotWin();
      console.log(scissorsWinPaper);
    }
  }
}
function displayResult() {
  if (robotNumber == 1) {
    displayRobotChoice = "Камінь";
  } else if (robotNumber == 2) {
    displayRobotChoice = "Ножиці";
  } else if (robotNumber == 3) {
    displayRobotChoice = "Папір";
  }

  if (userNumber == 1) {
    displayUserChoice = "Камінь";
  } else if (userNumber == 2) {
    displayUserChoice = "Ножиці";
  } else if (userNumber == 3) {
    displayUserChoice = "Папір";
  }
}
