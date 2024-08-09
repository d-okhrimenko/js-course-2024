// Функція для генерації випадкового числа в діапазоні
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для генерування випадкового математичного виразу
function generateExpression() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    // Повертаємо вираз і правильну відповідь
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            // Для простоти ділимо на числа, які не дають залишку
            answer = num1 / num2;
            // Округлюємо відповідь до 2 знаків після коми
            answer = Math.round(answer * 100) / 100;
            break;
    }

    return {
        expression: `${num1} ${operator} ${num2}`,
        answer: answer
    };
}

// Головна функція для запуску гри
function playGame() {
    const maxAttempts = 5; // Кількість спроб
    let correctCount = 0;
    let incorrectCount = 0;

    for (let i = 0; i < maxAttempts; i++) {
        // Генерація математичного виразу
        const { expression, answer } = generateExpression();
        
        // Запит відповіді у користувача
        const userAnswer = parseFloat(prompt(`Розв'яжіть: ${expression}`));

        // Перевірка відповіді
        if (Math.abs(userAnswer - answer) < 0.01) { // Дозволяємо невелику похибку для ділення
            correctCount++;
            alert("Правильно!");
        } else {
            incorrectCount++;
            alert(`Неправильно! Правильна відповідь: ${answer}`);
        }
    }

    // Виведення підсумкових результатів
    alert(`Гра завершена!\nПравильні відповіді: ${correctCount}\nНеправильні відповіді: ${incorrectCount}`);
}

// Запуск гри
playGame();
