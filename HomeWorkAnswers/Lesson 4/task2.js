function generateExpression() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let expression;
    if (operator === '/') {
        expression = `${num1 * num2} / ${num2}`;
    } else {
        expression = `${num1} ${operator} ${num2}`;
    }

    const correctAnswer = eval(expression);

    return { expression, correctAnswer };
}

function playQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const attempts = 5; 

    for (let i = 0; i < attempts; i++) {
        const { expression, correctAnswer } = generateExpression();

        const userAnswer = parseFloat(prompt(`Вирішіть: ${expression}`));

        if (userAnswer === correctAnswer) {
            alert('Правильно!');
            correctAnswers++;
        } else {
            alert(`Неправильно. Правильна відповідь: ${correctAnswer}`);
            incorrectAnswers++;
        }
    }

    alert(`Гра завершена!\nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${incorrectAnswers}`);
}

playQuiz();