// Function to generate random numbers
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  // Function to generate a random operator
  function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  }
  
  // Function to generate a math question
  function generateQuestion() {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(10);
    const operator = getRandomOperator();
    let question;
    let correctAnswer;
  
    switch (operator) {
      case '+':
        question = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case '-':
        question = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case '*':
        question = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
      case '/':
        question = `${num1} / ${num2}`;
        correctAnswer = parseFloat((num1 / num2).toFixed(2)); // Keep two decimal places
        break;
    }
    return { question, correctAnswer };
}

// Function to start the quiz
function startQuiz() {
  const totalQuestions = 5;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = parseFloat(prompt(`Розв'яжіть: ${question}`));

    if (userAnswer === correctAnswer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  }

  alert(`Кількість правильних відповідей: ${correctAnswers}\nКількість неправильних відповідей: ${incorrectAnswers}`);
}

// Start the quiz
startQuiz();