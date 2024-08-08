/* A math quiz */

let correctAnswers = 0;
let wrongAnswers = 0;
const attempts = 5;

for (let i = 0; i < attempts; i++) {
  let numberOne = Math.floor(Math.random() * 10) + 1;
  let numberTwo = Math.floor(Math.random() * 10) + 1;
  let operators = ['+', '-', '*', '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  let expression = `${numberOne} ? ${numberTwo}`;
  let expressionDisplay =
    operator === '+' || operator === '-'
      ? `${numberOne} ${operator} ${numberTwo}`
      : expression;
  let userAnswer = parseFloat(
    prompt(
      `Розв'яжіть: ${expressionDisplay}
    ? = * або /
    При діленні враховуються 2 знаки після крапки`
    )
  );

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    case '/':
      correctAnswer = parseFloat((numberOne / numberTwo).toFixed(2));
      break;
  }

  if (userAnswer === correctAnswer) {
    correctAnswers++;
    alert('Правильно!');
  } else {
    wrongAnswers++;
    alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
  }
}

alert(
  `Гра завершена! Кількість правильних відповідей: ${correctAnswers}, кількість неправильних відповідей: ${wrongAnswers}`
);
