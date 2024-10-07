function getRandomOperator() {
    let operators = ['+', '-', '*', '/'];
    let randomIndex = Math.floor(Math.random() * operators.length); // Випадковий індекс від 0 до 3
    return operators[randomIndex];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}



function calculateResult(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = null; // Уникання ділення на нуль
            }
            break;
    }
    return result;
}



function playMathQuiz() {
    let attempts = 5;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    for (let i = 0; i < attempts; i++) {
        let num1 = getRandomNumber();
        let num2 = getRandomNumber();
        let operator = getRandomOperator();

        let correctResult = calculateResult(num1, num2, operator);

        if (correctResult === null) {
            i-- // Повторити спробу
            continue;
        }

        let userAnswer = parseFloat(prompt(`Вирішіть вираз: ${num1} ${operator} ${num2}`));

        if (userAnswer === correctResult) {
            alert("Правильно!");
            correctAnswers++;
        } else {
            alert(`Неправильно. Правильна відповідь: ${correctResult}`);
            incorrectAnswers++;
        }
    }

    alert(`Гра завершена! Правильні відповіді: ${correctAnswers}, Неправильні відповіді: ${incorrectAnswers}`);
}

playMathQuiz();