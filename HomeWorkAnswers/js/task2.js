const OPERATORS = ['+', '-', '*', '/'];
const MIN_NUM = 1;
const MAX_NUM = 10;

const generateExpression = () => {
  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const num1 = generateRandomNumber(MIN_NUM, MAX_NUM);
  const num2 = generateRandomNumber(MIN_NUM, MAX_NUM);
  const operator = OPERATORS[generateRandomNumber(0, OPERATORS.length - 1)];

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = (num1 / num2).toFixed(2);
      break;
  }

  return {
    expression: `${num1} ${operator} ${num2}`,
    correctAnswer: parseFloat(correctAnswer),
  };
};

const getAnswerFromUser = (expression) => {
  const maxAttempts = 3;
  let userAnswer;

  for (let attempts = 0; attempts < maxAttempts; attempts += 1) {
    const userInput = prompt(`Обчисліть: ${expression}`);

    // Обробка випадку, коли користувач натискає "Скасувати"
    if (userInput === null) {
      return null;
    }

    userAnswer = parseFloat(userInput);

    // Перевірка, чи є введене значення коректним числом
    if (!isNaN(userAnswer)) {
      return userAnswer;
    } else if (attempts !== maxAttempts - 1) {
      alert('Будь ласка, введіть коректне число.');
    }
  }
};

const getNumberOfQuiz = () => {
  let numQuestions;

  while (true) {
    const userInput = prompt('Скільки математичних виразів ви хочете згенерувати?');

    // Користувач натиснув "Скасувати"
    if (userInput === null) {
      return null;
    }

    numQuestions = parseInt(userInput);

    if (!isNaN(numQuestions) && numQuestions > 0) {
      return numQuestions;
    } else {
      alert('Будь ласка, введіть коректну кількість математичних виразів.');
    }
  }
};

const playMathQuiz = () => {
  const numQuestions = getNumberOfQuiz();

  if (numQuestions === null) {
    alert('Гру скасовано.\nНатисніть на кнопку "New Game" щоб почати нову гру!');
    return;
  }

  let correctAnswers = 0;
  let wrongAnswers = 0;

  for (let i = 0; i < numQuestions; i += 1) {
    const { expression, correctAnswer } = generateExpression();
    const userAnswer = getAnswerFromUser(expression);

    if (userAnswer === null) {
      alert(`Гру скасовано.\nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${wrongAnswers}`);

      return;
    }

    if (userAnswer === correctAnswer) {
      correctAnswers++;
      alert('Правильно!');
    } else {
      wrongAnswers++;
      alert(`Неправильно. Правильна відповідь: ${correctAnswer}`);
    }
  }

  alert(`Гра завершена.\nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${wrongAnswers}`);
};

playMathQuiz();
