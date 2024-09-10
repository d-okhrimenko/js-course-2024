"use strict";
let counterCorrect = 0;
let counterWrong = 0;

const btnQuiz = document.querySelector(".btn-new");
const btnGuess = document.querySelector(".btn-guess");
const btnQuitGame = document.querySelector(".btn-quit");
const random1 = document.getElementById("random1");
const random2 = document.getElementById("random2");
const operator = document.getElementById("operator");

const correctBox = document.getElementById("correct");
correctBox.textContent = counterCorrect;

const wrongBox = document.getElementById("wrong");
wrongBox.textContent = counterWrong;

const mathOperators = ["+", "*", "-", "/"];

// function that find operator convenient for user calculation depending on random numbers
const findOperator = function (num1, num2) {
  let index;

  if (num1 >= num2 && num1 % num2 === 0) index = Math.floor(Math.random() * 4);
  else if (num1 > num2) index = Math.floor(Math.random() * 3);
  else index = Math.floor(Math.random() * 2);

  return mathOperators[index];
};

// function generating two random numbers and operator
function generateQuiz() {
  // generating random number between 1-10 (inclusive)
  const num1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  const num2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  const oper = findOperator(num1, num2);

  return {
    num1: num1,
    num2: num2,
    oper: oper,
  };
}

// function calculating result of Quiz
function calcAnswer() {
  switch (operator.textContent) {
    case "+":
      return Number(random1.textContent) + Number(random2.textContent);
      break;

    case "*":
      return Number(random1.textContent) * Number(random2.textContent);
      break;

    case "-":
      return Number(random1.textContent) - Number(random2.textContent);
      break;

    case "/":
      return Number(random1.textContent) / Number(random2.textContent);
      break;
  }
}

btnQuiz.addEventListener("click", () => {
  const objQuiz = generateQuiz();
  random1.textContent = objQuiz["num1"];
  random2.textContent = objQuiz["num2"];
  operator.textContent = objQuiz["oper"];
});

btnGuess.addEventListener("click", () => {
  const corrAnswer = calcAnswer();
  let answer;

  if (random1.textContent && random2.textContent && operator.textContent) {
    for (let i = 3, attempts = 0; i > 0; i--) {
      answer = +prompt(`Type your answer. You have ${i} attempts to guess.`);

      if (answer === corrAnswer) {
        counterCorrect++;
        break;
      } else attempts++;

      if (attempts === 3) counterWrong++;
    }

    random1.textContent = random2.textContent = operator.textContent = "";
  } else alert("Click New Quiz before guessing.");

  console.log(corrAnswer);
  console.log(counterCorrect);
  console.log(counterWrong);
  correctBox.textContent = counterCorrect;
  wrongBox.textContent = counterWrong;
});

btnQuitGame.addEventListener("click", () => {
  random1.textContent = random2.textContent = operator.textContent = "";
  counterCorrect = counterWrong = 0;
  correctBox.textContent = wrongBox.textContent = "";
});
