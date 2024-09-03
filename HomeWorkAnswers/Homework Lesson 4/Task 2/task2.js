const operatorsArray = ['+', '-', '*', '/'];
let firstNumber;
let secondNumber;
let randomOperator;
let randomExpression;
let correctAnswer;
let tries = 3;
let round = 1;

function generateOperator(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateNumber(min = -1000, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExpression() {
    firstNumber = generateNumber();
    secondNumber = generateNumber();
    randomOperator = generateOperator(operatorsArray);
    randomExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;
    document.getElementById('expression').innerText = randomExpression;
}

function calculateExpression() {
    switch (randomOperator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            alert('Expression ERROR!')
            break;
    }
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('userAnswer').value);
    correctAnswer = calculateExpression();

    if (userAnswer === correctAnswer) {
        round++;
        document.getElementById('round').innerText = round;
        generateExpression();
    } else {
        tries--;
        document.getElementById('tries').innerText = tries;
        if (tries === 0) {
            alert(`Game Over! The correct answer is ${correctAnswer}`);
            tries = 3;
            round = 1;
            document.getElementById('tries').innerText = tries;
            document.getElementById('round').innerText = round;
            generateExpression();
        }
    }
}

document.getElementById('checkButton').addEventListener('click', checkAnswer);
generateExpression();
