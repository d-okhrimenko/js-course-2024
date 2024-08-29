function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExpression() {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operators = ["+", "-", "*", "/"];
  const operator = operators[getRandomNumber(0, 3)];

  return `${num1} ${operator} ${num2}`;
}

function playQuiz() {
  const attempts = 3;
  let correctAnswers = 0;
  let wrongAnswers = 0;

  for (let i = 0; i < attempts; i++) {
    const expression = generateExpression();
    const userAnswer = prompt(`Обчисліть вираз: ${expression}`);

    const correctResult = eval(expression);
    if (userAnswer !== null && parseFloat(userAnswer) === correctResult) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  }

  alert(
    `Гра завершена!\nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${wrongAnswers}`
  );
}

playQuiz();
