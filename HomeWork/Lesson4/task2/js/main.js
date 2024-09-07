let correctAnswers = 0;
let wrongAnswers = 0;
const totalQuestions = 5; // Общее количество вопросов
const quizDiv = document.getElementById('quiz');
const resultPopup = document.getElementById('resultPopup');
const resultsText = document.getElementById('results');
const closeBtn = document.querySelector('.close');

document.getElementById('startQuiz').addEventListener('click', startQuiz);
document.getElementById('exitGame').addEventListener('click', exitGame);
closeBtn.addEventListener('click', () => {
    resultPopup.style.display = "none";
});

function startQuiz() {
    correctAnswers = 0;
    wrongAnswers = 0;
    quizDiv.innerHTML = ''; // Очистить предыдущие вопросы

    for (let i = 0; i < totalQuestions; i++) {
        const question = generateQuestion();
        quizDiv.appendChild(question);
    }

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Показати результати';
    submitButton.classList.add('quiz-button');
    submitButton.addEventListener('click', showResults);
    quizDiv.appendChild(submitButton);
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const questionText = `${num1} ${operator} ${num2}`;
    const correctAnswer = eval(questionText);

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question', 'fade-in'); // Добавляем класс для анимации

    const questionLabel = document.createElement('label');
    questionLabel.textContent = questionText + ' = ';
    questionDiv.appendChild(questionLabel);

    const answerInput = document.createElement('input');
    answerInput.type = 'number';
    answerInput.dataset.correctAnswer = correctAnswer;
    questionDiv.appendChild(answerInput);

    answerInput.addEventListener('change', (e) => {
        const userAnswer = parseFloat(e.target.value);
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    });

    return questionDiv;
}

function showResults() {
    resultsText.textContent = `Правильні відповіді: ${correctAnswers}, Неправильні відповіді: ${wrongAnswers}`;
    resultPopup.style.display = "block";
}

function exitGame() {
    if (confirm('Ви впевнені, що хочете вийти з гри?')) {
        window.close(); // Закрывает окно, если это возможно
    }
}

// Завантажить користувачів з JSON файла
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        console.log('Завантажені користувачі:', users);
    })
    .catch(error => console.error('Помилка при завантаженні користувачів:', error));