let correctAnswers = 0;
let incorrectAnswers = 0;
let attempts = 0;
const maxAttempts = 5;

function generateQuestion() {
    if (attempts >= maxAttempts) {
        alert(`Гра закінчена! Правильні відповіді: ${correctAnswers}, Неправильні відповіді: ${incorrectAnswers}`);
        return;
    }

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let correctAnswer;
    switch (operation) {
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
            correctAnswer = (num1 / num2).toFixed(2);
            break;
    }

    const userAnswer = prompt(`Розв'яжіть вираз: ${num1} ${operation} ${num2}`);

    if (userAnswer === null) {
        alert('Ви скасували гру');
        return;
    }

    attempts++;

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    document.getElementById('score').innerText = `Правильні відповіді: ${correctAnswers}, Неправильні відповіді: ${incorrectAnswers}, Залишилось спроб: ${maxAttempts - attempts}`;

    if (attempts < maxAttempts) {
        generateQuestion();
    } else {
        alert(`Гра закінчена! Правильні відповіді: ${correctAnswers}, Неправильні відповіді: ${incorrectAnswers}`);
    }
}