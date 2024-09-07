function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExpression() {
    let num1 = generateRandomNumber(1, 10); // випадкове число від 1 до 10
    let num2 = generateRandomNumber(1, 10); // випадкове число від 1 до 10
    let operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    let expression = `${num1} ${operator} ${num2}`;
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
            correctAnswer = (num1 / num2).toFixed(2); // округлюємо до 2 знаків
            break;
    }

    return { expression, correctAnswer };
}

function startQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let attempts = 5; // кількість спроб

    for (let i = 0; i < attempts; i++) {
        let { expression, correctAnswer } = generateExpression();
        let userAnswer = prompt(`Вирішіть: ${expression}`);
        
        // Перевіряємо відповідь
        if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
            correctAnswers++;
            alert("Правильно!");
        } else {
            incorrectAnswers++;
            alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
        }
    }

    // Підсумкові результати
    alert(`Гра завершена! Правильні відповіді: ${correctAnswers}, Неправильні: ${incorrectAnswers}`);
}

// Запускаємо гру
startQuiz();