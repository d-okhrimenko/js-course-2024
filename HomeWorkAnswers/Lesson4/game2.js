const maxQuantityAttempt = 3
stopGame = false,
  mathAction = ['+', '-', '*', '/'];
let currentMathAction,
  number1,
  number2,
  correctAnswer,
  usersAnswer,
  countCorrectAnswer = 0,
  countIncorrectAnswer = 0;

do {
  currentMathAction = mathAction[Math.floor(Math.random() * 4)];
  number1 = Math.floor(Math.random() * 10 + 1);
  number2 = Math.floor(Math.random() * 10 + 1);
  switch (currentMathAction) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    case '/':
      correctAnswer = (number1 / number2).toFixed(2);
      break;
  }

  alert(`correctAnswer = ${number1} ${currentMathAction} ${number2} = ${correctAnswer}`);
  for (let i = 0; i < maxQuantityAttempt; i++) {
    usersAnswer = prompt(`Введіть правильну відповідь: ${number1} ${currentMathAction} ${number2} = ?`);
    alert('Спроба ' + (i+1) + usersAnswer);
    if (usersAnswer == correctAnswer) {
      countCorrectAnswer++;
      console.log('It`s True');
      break;
    } else {
      console.log('It`s False' + countIncorrectAnswer);
      countIncorrectAnswer++;
      if (countIncorrectAnswer >= maxQuantityAttempt) {
        stopGame = true;
        break;
      }
    }

  }
  
  if ((Number(countCorrectAnswer) + Number(countIncorrectAnswer)) > 5) {
    if (confirm('Закінчити гру?')) {
      stopGame = true;
      break;
    }
  }
} while (!stopGame);
alert(`Гру закінчено. Правильних відповідей - ${countCorrectAnswer}, неправильних - ${countIncorrectAnswer}`);
