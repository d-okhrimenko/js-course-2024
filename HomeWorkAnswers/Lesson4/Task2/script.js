document.getElementById("start-quiz").addEventListener("click", startQuiz);

function startQuiz() {
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  const totalQuestions = 5;

  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operatorIndex = Math.floor(Math.random() * 4);
    let operator, correctAnswer;

    switch (operatorIndex) {
      case 0:
        operator = "+";
        correctAnswer = num1 + num2;
        break;
      case 1:
        operator = "-";
        correctAnswer = num1 - num2;
        break;
      case 2:
        operator = "*";
        correctAnswer = num1 * num2;
        break;
      case 3:
        operator = "/";
        correctAnswer = (num1 / num2).toFixed(2);
        break;
    }

    const userAnswer = parseFloat(
      prompt(`Скільки буде: ${num1} ${operator} ${num2}?`)
    );

    if (userAnswer === correctAnswer) {
      correctAnswers++;
      alert("Правильно!");
    } else {
      incorrectAnswers++;
      alert(`Неправильно. Правильна відповідь: ${correctAnswer}`);
    }
  }

  alert(
    `Гра завершена! Правильних відповідей: ${correctAnswers}, Неправильних відповідей: ${incorrectAnswers}`
  );
}
