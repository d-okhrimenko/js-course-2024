let correctAnswers = 0;
let incorrectAnswers = 0;
let expressionsResult;
function start() {
  let firstNumber = Math.floor(Math.random() * 10) + 1;
  let secondNumber = Math.floor(Math.random() * 10) + 1;
  let operator = getRandomOperator();

  function getRandomOperator() {
    const operators = ["+", "-", "*", "/"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  }

  switch (operator) {
    case "+":
      expressionsResult = firstNumber + secondNumber;
      break;
    case "-":
      expressionsResult = firstNumber - secondNumber;
      break;
    case "*":
      expressionsResult = firstNumber * secondNumber;
      break;
    case "/":
      expressionsResult = firstNumber / secondNumber;
      break;
  }
  document.querySelector(
    "#expression"
  ).innerHTML = `${firstNumber} ${operator} ${secondNumber} = `;
}
start();

document.querySelector("#enter").onclick = function () {
  let result = Number(prompt("Ваша відповідь(число):"));

  document.querySelector("#enter").style.display = "none";
  document.querySelector("#result").innerHTML = result;
  setTimeout(() => getAnswer(result), 1000);
};

function getAnswer(result) {
  if (expressionsResult === result) {
    alert("Ваша відповідь вірна!");
    correctAnswers += 1;
    document.querySelector("#correct").innerHTML = correctAnswers;
  } else {
    alert(`Нажаль, правильна відповідь ${expressionsResult}`);
    incorrectAnswers += 1;
    document.querySelector("#incorrect").innerHTML = incorrectAnswers;
  }

  document.querySelector("#result").innerHTML = "";
  document.querySelector("#enter").style.display = "inline";
  setTimeout(() => start(correctAnswers, incorrectAnswers), 1000);
}
