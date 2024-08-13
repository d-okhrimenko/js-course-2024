const attemptsCount = 5;

let correctAnswersCount = 0;
let expression = "";
let correctAnswer = 0;
let userAnswer = "";
let msgResult = "";

const operations = ['+', '-', '*', '/'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExpression() {
    const operand1 = getRandomInt(10, 20);
    const operand2 = getRandomInt(1, 10);
    const operator = operations[getRandomInt(0, operations.length - 1)];
    expression = `${operand1} ${operator} ${operand2}`;
    correctAnswer = eval(expression);
}

function startNewQuiz() {
    const details = document.getElementById('details');
    while (details.firstChild) {
        details.removeChild(details.firstChild);
    }

    for (let i = 0; i < attemptsCount; i++) {
        generateExpression();
        userAnswer = prompt(`Question ${i+1}: What is the result of: ${expression}?`).trim();
        if (userAnswer == correctAnswer) {
            alert("Correct!");
            correctAnswersCount++;
        } else {
            alert("Incorrect!");
        }
        const detailItem = document.createElement('li');
        detailItem.innerText = `Question ${i+1}: ${expression}, Your answer: ${userAnswer}, Correct answer: ${correctAnswer}`;
        details.appendChild(detailItem);
    }

    alert(`Quiz is finished! You gave ${correctAnswersCount} correct answers out of ${attemptsCount} attempts`);

    let control = document.querySelector("#countCorrectAnwers");
    control.innerHTML = `Correct answers: ${correctAnswersCount}`; 
    
    control = document.querySelector("#counter");
    control.innerHTML = `Attempts count: ${attemptsCount}`; 
}
