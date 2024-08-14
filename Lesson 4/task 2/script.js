function startQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let attempts = 5; // Кількість спроб
    let operations = ["+", "-", "*", "/"];

    for (let i = 0; i < attempts; i++) {
        // Генерація випадкових чисел
        let num1 = Math.floor(Math.random() * 10) + 1; // Числа від 1 до 10
        let num2 = Math.floor(Math.random() * 10) + 1;
        let operation = operations[Math.floor(Math.random() * operations.length)]; // Випадковий оператор

        // Обчислення правильного результату
        let correctResult;
        switch (operation) {
            case "+":
                correctResult = num1 + num2;
                break;
            case "-":
                correctResult = num1 - num2;
                break;
            case "*":
                correctResult = num1 * num2;
                break;
            case "/":
                correctResult = parseFloat((num1 / num2).toFixed(2)); // Результат до двох знаків після коми
                break;
        }

        // Запитання користувача про правильну відповідь
        let userAnswer = parseFloat(prompt(`Спроба ${i + 1}: Скільки буде ${num1} ${operation} ${num2}?`));

        // Перевірка відповіді
        if (userAnswer === correctResult) {
            alert("Правильно!");
            correctAnswers++;
        } else {
            alert(`Неправильно! Правильна відповідь: ${correctResult}`);
            incorrectAnswers++;
        }
    }

    // Виведення підсумкових результатів
    alert(`Гра завершена! Правильних відповідей: ${correctAnswers}, Неправильних відповідей: ${incorrectAnswers}`);
    document.getElementById("score").innerText = `Ваш результат: Правильних відповідей - ${correctAnswers}, Неправильних - ${incorrectAnswers}`;
}
