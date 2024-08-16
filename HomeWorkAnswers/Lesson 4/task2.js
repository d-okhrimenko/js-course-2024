function generateExpression() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let expression;
  let correctAnswer;

  switch (operator) {
    case "+":
      expression = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case "-":
      expression = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case "*":
      expression = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    case "/":
      expression = `${num1} / ${num2}`;
      correctAnswer = num1 / num2;
      correctAnswer = correctAnswer.toFixed(2);
      break;
  }

  return { expression, correctAnswer };
}

function mathQuiz() {
  const attempts = 5;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  for (let i = 0; i < attempts; i++) {
    const { expression, correctAnswer } = generateExpression();
    const userAnswer = prompt(`Solve the expression: ${expression}`);

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert(`Incorrect. The correct answer was ${correctAnswer}`);
      incorrectAnswers++;
    }
  }

  alert(
    `Game over! You got ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers.`
  );
}

mathQuiz();
