const operators = ['+', '-', '*', '/'];
let operand1, operand2, operator, answer, result, correctAnswers, incorrectAnswers, assignments, attempts;

function mathQuiz() {
  correctAnswers = 0;
  incorrectAnswers = 0;
  assignments = 1;
  attempts = 3;

  while (attempts > 0) {
    alert(`Завдання №${assignments}`);

    operand1 = getRandomNumber();
    operand2 = getRandomNumber();
    operator = operators[Math.floor(Math.random() * operators.length)];
    result = calculateExpression();

    answer = getAnswer(operand1, operand2, operator);

    if ((answer === result)) {
      correctAnswers++;
      alert(`Відповідь вірна!\n\nВірно: ${correctAnswers}\nНе вірно: ${incorrectAnswers}`);
    } else {
      attempts--;
      alert(`Відповідь не вірна :(\nПравильна відповідь: ${result}\nСпроб залишилось: ${attempts}`);
      if (attempts === 0) {
        incorrectAnswers++;
        break;
      }
    }

    assignments++;
  }

  alert(`РЕЗУЛЬТАТ\n\nВірно: ${correctAnswers}\nНе вірно: ${incorrectAnswers}`);

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  };

  function calculateExpression(result) {
    switch (operator) {
      case '+':
        return result = operand1 + operand2;
      case '-':
        return result = operand1 - operand2;
      case '*':
        return result = operand1 * operand2;
      case '/':
        return result = Math.floor((operand1 / operand2) * 100) / 100;;
    }
  };

  function getAnswer(operand1, operand2, operator) {
    let input;

    while (true) {
      input = prompt(`Обчисліть вираз: ${operand1} ${operator} ${operand2} =\n\n2 знаки після коми для операції ділення.`).trim();

      if (input === null) {
        return null;
      }

      if (input !== "" && !isNaN(input)) {
        return Number(input);
      } else {
        alert("Некоректний ввід!");
      }
    }
  };
};