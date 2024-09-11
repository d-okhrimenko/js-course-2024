// HOMEWORK TASK 1

const choices = ["КАМІНЬ", "НОЖИЦІ", "ПАПІР"];
let userChoice;

const rock = (document.querySelector("#rock").onclick = function () {
  userChoice = "КАМІНЬ";
});
const scissors = (document.querySelector("#scissors").onclick = function () {
  userChoice = "НОЖИЦІ";
});
const paper = (document.querySelector("#paper").onclick = function () {
  userChoice = "ПАПІР";
});

let userScore = 0;
let botScore = 0;

const userScoreElement = document.querySelector("#userScore");
const botScoreElement = document.querySelector("#botScore");
const mesGame = document.querySelector("#mesGame");

function getBotChoice() {
  const randChoice = Math.floor(Math.random() * choices.length);
  return choices[randChoice];
}

document.querySelector("#play").onclick = function () {
  if (!userChoice) {
    mesGame.innerHTML = "Спочатку вибери щось для змагання 🤷‍♀️! ";
    return;
  }

  let botChoice = getBotChoice();

  if (botChoice === userChoice) {
    mesGame.innerHTML = `Бот також вибрав ${userChoice}. Продовжуємо гру 😎!`;
  } else if (
    (userChoice === "КАМІНЬ" && botChoice === "НОЖИЦІ") ||
    (userChoice === "НОЖИЦІ" && botChoice === "ПАПІР") ||
    (userChoice === "ПАПІР" && botChoice === "КАМІНЬ")
  ) {
    mesGame.innerHTML = `Твій вибір - ${userChoice}, а Бот вибрав ${botChoice}. Ти переміг 💪 !`;
    userScore++;
  } else {
    mesGame.innerHTML = `Твій вибір - ${userChoice}, а Бот вибрав ${botChoice}. Ти програв 👎 !`;
    botScore++;
  }

  userScoreElement.innerHTML = userScore;
  botScoreElement.innerHTML = botScore;

  if (userScore === 5 || botScore === 5) {
    setTimeout(function () {
      if (userScore === 5) {
        mesGame.innerHTML = `Ну ти прям непереможний !!! Вітаю, ти виграв гру !!! 🎉`;
      } else if (botScore === 5) {
        mesGame.innerHTML = `Не розчаровуйся, Боту просто пощастило в цей раз. Спробуй знову 🤞!`;
      }

      userScore = 0;
      botScore = 0;
      userScoreElement.innerHTML = userScore;
      botScoreElement.innerHTML = botScore;
    }, 2500);
  }
  userChoice = null;
};

document.querySelector("#exit").onclick = function () {
  mesGame.innerHTML = "Зараз дізнаємось, хто переможе !";
  userScore = 0;
  botScore = 0;
  userScoreElement.innerHTML = userScore;
  botScoreElement.innerHTML = botScore;
};

// HOMEWORK TASK 2

let expression = document.querySelector("#expression");
let userResult = document.querySelector("#userResult");
let message = document.querySelector("#message");

let trueScore = 0;
let falseScore = 0;

let userTrueScore = document.querySelector("#trueAnswer");
let userFalseScore = document.querySelector("#falseAnswer");

let operator = getOperator();
let numbers = getNumbers();

function getNumbers() {
  let firstNum;
  let secondNum;

  do {
    firstNum = Math.floor(Math.random() * 100 + 1);
    secondNum = Math.floor(Math.random() * 100 + 1);
  } while (firstNum < secondNum);

  return [firstNum, secondNum];
}

function getOperator() {
  let operators = ["+", "-", "*", "/"];
  let operator = Math.floor(Math.random() * operators.length);
  return operators[operator];
}

function calculate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      return null;
  }
}

expression.innerHTML = `${numbers[0]}  ${operator}  ${numbers[1]}  =  ?`;

let result = Math.floor(calculate(numbers[0], numbers[1], operator));

function generateNewExpression() {
  operator = getOperator();
  numbers = getNumbers();
  result = Math.floor(calculate(numbers[0], numbers[1], operator));
  expression.innerHTML = `${numbers[0]} ${operator} ${numbers[1]} = ?`;
}

document.querySelector("#btnResultCheck").onclick = function () {
  if (userResult.value === "") {
    message.innerHTML = "Спочатку введи свою відповідь 🤷‍♂️";
  } else if (isNaN(userResult.value)) {
    message.innerHTML = `Хм, ти впевнений, що "${userResult.value}" це відповідь ? 🙄`;
    userResult.value = "";
  } else if (+userResult.value === result) {
    message.innerHTML = "Нічого собі ! Вірно 💪 !";
    trueScore++;
  } else {
    message.innerHTML = "Ні, промазав, давай ще раз 🤞!";
    falseScore++;
  }

  userTrueScore.innerHTML = trueScore;
  userFalseScore.innerHTML = falseScore;

  generateNewExpression();
  userResult.value = "";

  if (trueScore === 5 || falseScore === 5) {
    expression.innerHTML = "СТОП ГРА";
    setTimeout(function () {
      if (trueScore === 5) {
        message.innerHTML = `Справжній математик ! Піду диплом намалюю 🎉!`;
      } else if (falseScore === 5) {
        message.innerHTML = `Мда ... хтось трошки прогулював початкові класи ... 🤨`;
      }

      trueScore = 0;
      falseScore = 0;
      userTrueScore.innerHTML = trueScore;
      userFalseScore.innerHTML = falseScore;
      expression.innerHTML = `${numbers[0]} ${operator} ${numbers[1]} = ?`;
    }, 2000);
  }
};

document.querySelector("#exitQuiz").onclick = function () {
  message.innerHTML = "Перевіримо, який ти математик 🎓📚";
  trueScore = 0;
  falseScore = 0;
  userTrueScore.innerHTML = trueScore;
  userFalseScore.innerHTML = falseScore;

  generateNewExpression();
};

// CLASSWORK TASK 1

let randomNumber = Math.floor(Math.random() * 100) + 1;
let counterValue = document.querySelector("#counter");
let counter = 6;

counterValue.innerHTML = counter;

document.querySelector("#btnCheck").onclick = function () {
  let userNumber = document.querySelector("#userNumber").value;
  let result = document.querySelector("#result");

  counter--;
  counterValue.innerHTML = counter;

  if (userNumber === "") {
    result.innerHTML = "Ну введи хоча б що небудь 🤷‍♂️";
  } else if (isNaN(userNumber)) {
    result.innerHTML = "Ти впевнений, що це взагалі число ? 🙄";
  } else if (+userNumber > 100) {
    result.innerHTML = "Ого ти розігнався, число має бути менше ніж 100 😎";
  } else if (+userNumber < 0) {
    result.innerHTML = "Довго ж ти будеш вгадувати, число має бути більше ніж 0 🤨";
  } else if (randomNumber === +userNumber) {
    result.innerHTML = `Вітаю ! Ти вгадав ! Я загадав число ${randomNumber}`;
    document.querySelector("#btnCheck").innerHTML = "Грати ще раз";
    counter = 6;
    counterValue.innerHTML = counter;
    randomNumber = Math.floor(Math.random() * 100) + 1;
  } else if (randomNumber > +userNumber) {
    result.innerHTML = `Спробуй ще раз ! Я загадав число більше ніж ${userNumber}`;
    document.querySelector("#btnCheck").innerHTML = "Наступна спроба";
  } else if (randomNumber < +userNumber) {
    result.innerHTML = `Спробуй ще раз ! Я загадав число менше ніж ${userNumber}`;
    document.querySelector("#btnCheck").innerHTML = "Наступна спроба";
  }

  if (counter === 0) {
    result.innerHTML = "Телепат з тебе так собі... починай все спочатку";
    document.querySelector("#btnCheck").innerHTML = "Почати спочатку";
    counter = 6;
    counterValue.innerHTML = counter;
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  document.querySelector("#userNumber").value = "";
};

// CLASSWORK TASK 2

document.querySelector("#btnPalCheck").onclick = function () {
  let userPhrase = document.querySelector("#userPhrase").value;
  let phraseValue = userPhrase.replace(/\s+/g, "").toLowerCase();
  let len = phraseValue.length;
  let palResult = document.querySelector("#palResult");
  let isPalindrom;

  for (let i = 0; i < len / 2; i++) {
    if (phraseValue[i] !== phraseValue[len - 1 - i]) {
      isPalindrom = false;
      break;
    }
    isPalindrom = true;
  }

  if (userPhrase === "") {
    palResult.innerHTML = "Ну введи хоча б що небудь 🤷‍♂️";
  } else if (isPalindrom) {
    palResult.innerHTML = `Супер ! Фраза "${userPhrase}" дійсно паліндром 🤩!`;
  } else {
    palResult.innerHTML = `Нажаль, фраза "${userPhrase}" не паліндром. Подумай ще 😫!`;
  }

  document.querySelector("#userPhrase").value = "";
};

// CLASSWORK TASK 3

document.querySelector("#btnSumCheck").onclick = function () {
  let userStartNum = document.querySelector("#userStartNum").value;
  let userEndNum = document.querySelector("#userEndNum").value;
  let resultSum = document.querySelector("#resultSum");
  let sum = 0;

  if (userStartNum === "" || userEndNum === "") {
    resultSum.innerHTML = "Ну введи хоча б що небудь 🤷‍♂️";
  } else if (isNaN(userStartNum)) {
    resultSum.innerHTML = "Ти впевнений, що це взагалі число ? 🙄";
    document.querySelector("#userStartNum").value = "";
  } else if (isNaN(userEndNum)) {
    resultSum.innerHTML = "Ти впевнений, що це взагалі число ? 🙄";
    document.querySelector("#userEndNum").value = "";
  } else {
    userStartNum = +userStartNum;
    userEndNum = +userEndNum;

    if (userEndNum < userStartNum) {
      resultSum.innerHTML = "Кінець діапазону не може бути меншим початку 🤨";
      document.querySelector("#userStartNum").value = "";
      document.querySelector("#userEndNum").value = "";
    } else {
      for (let i = userStartNum; i <= userEndNum; i++) {
        sum += i;
      }
      resultSum.innerHTML = `Сума чисел в діапазоні від ${userStartNum} до ${userEndNum} дорівнює ${sum}`;
      document.querySelector("#userStartNum").value = "";
      document.querySelector("#userEndNum").value = "";
    }
  }
};
