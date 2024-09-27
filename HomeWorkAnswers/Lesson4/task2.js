const mathOperators = ['+', '-', '*', '/'];
let round = 1;
let rightAnswers = 0;
let wrongAnswers = 0;

while (true) {
  let randomIndex = Math.floor(Math.random() * mathOperators.length);
  let randomOperator = mathOperators[randomIndex];
  let randomA = randomNumber(10);
  let randomB = randomNumber(10);
  let userAnswer = prompt(`
    ${randomA} ${randomOperator} ${randomB} = ?
    Enter your answer (round to 2 decimal places if needed):`);
  let answer = Number(userAnswer);
  if (userAnswer === 'exit' || userAnswer === null) {
    break;
  } else if (isNaN(userAnswer)) {
    alert(`The ${userAnswer} value is invalid. Try to enter again.`);
  } else {
    checkUserAnswer(randomA, randomOperator, randomB, answer);
    round++;
  }
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function checkUserAnswer(a, operator, b, input) {
  let expression = a + operator + b;
  let result = new Function('return ' + expression)();
  result = Number.isInteger(result) ? result : Math.round(result * 100) / 100;

  if (result === input) {
    rightAnswers++;
    alert(`
            Your answer ${input} is right!

            ${a} ${operator} ${b} = ${result}

            Round: ${round}
            Right answers: ${rightAnswers} 
            Wrong answers: ${wrongAnswers} 
            `);
  } else {
    wrongAnswers++;
    alert(`
            Your answer ${input} is wrong!

            ${a} ${operator} ${b} != ${result}

            Round: ${round}
            Right answers: ${rightAnswers} 
            Wrong answers: ${wrongAnswers} 
            `);
  }
}
