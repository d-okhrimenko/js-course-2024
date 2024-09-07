"use strict";

function generateExpression() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operators = ["+", "-", "*", "/"];
  var operator = operators[Math.floor(Math.random() * operators.length)];
  var expression;
  var correctAnswer;

  switch (operator) {
    case "+":
      expression = "".concat(num1, " + ").concat(num2);
      correctAnswer = num1 + num2;
      break;

    case "-":
      expression = "".concat(num1, " - ").concat(num2);
      correctAnswer = num1 - num2;
      break;

    case "*":
      expression = "".concat(num1, " * ").concat(num2);
      correctAnswer = num1 * num2;
      break;

    case "/":
      expression = "".concat(num1, " / ").concat(num2);
      correctAnswer = num1 / num2;
      correctAnswer = correctAnswer.toFixed(2);
      break;
  }

  return {
    expression: expression,
    correctAnswer: correctAnswer
  };
}

function mathQuiz() {
  var attempts = 5;
  var correctAnswers = 0;
  var incorrectAnswers = 0;

  for (var i = 0; i < attempts; i++) {
    var _generateExpression = generateExpression(),
        expression = _generateExpression.expression,
        correctAnswer = _generateExpression.correctAnswer;

    var userAnswer = prompt("Solve the expression: ".concat(expression));

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert("Incorrect. The correct answer was ".concat(correctAnswer));
      incorrectAnswers++;
    }
  }

  alert("Game over! You got ".concat(correctAnswers, " correct answers and ").concat(incorrectAnswers, " incorrect answers."));
}

mathQuiz();