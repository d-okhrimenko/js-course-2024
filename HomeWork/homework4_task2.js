function generateExpression() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndex];

    let expression;
    let correctAnswer;

    switch (operator) {
        case '+':
            expression = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            expression = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            expression = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            expression = `${num1} / ${num2}`;
            correctAnswer = (num1 / num2).toFixed(2);
            break;
    }

    return { expression, correctAnswer };
}

function playMathGame() {
    let correctCount = 0;
    let incorrectCount = 0;
    const attempts = 5;

    for (let i = 0; i < attempts; i++) {
        const { expression, correctAnswer } = generateExpression();
        const userAnswer = parseFloat(prompt(`Вирішіть вираз: ${expression}`));

        if (userAnswer == correctAnswer) {
            alert("Правильно!");
            correctCount++;
        } else {
            alert(`Неправильно. Правильна відповідь: ${correctAnswer}`);
            incorrectCount++;
        }
    }

    alert(`Гра завершена! Правильних відповідей: ${correctCount}, Неправильних відповідей: ${incorrectCount}`);
}

playMathGame();
