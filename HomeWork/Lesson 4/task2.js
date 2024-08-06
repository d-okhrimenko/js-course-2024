const OPERATORS = ['+', '-', '*', '/'];
let rightAnswerScore = 0;
let wrongAnsweScore = 0;

function generateNumber() {
    let value = Math.floor(Math.random() * 100) + 1;
    return value;
}

function generateOperator() {
    let index = Math.floor(Math.random() * OPERATORS.length);
    let operator = OPERATORS[index];
    return operator;
}

function generateExpression(firstNumber, secondNumber, operator) {
    let response = prompt(`Порахуйте, скільки буде ${firstNumber} ${operator} ${secondNumber}`);
    return +response;
}

function generateCheckValue(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
    }
}

function isAnswersEquel(responseValue, checkValue) {
    if (Math.abs(responseValue - checkValue) <= 0.1) {
        return true;
    } else {
        return false;
    }
}

document.querySelector('#startGame').onclick = function () {
    for (i = 0; i < 5; i++) {
        let firstNumber = generateNumber();
        let secondNumber = generateNumber();
        let operator = generateOperator();

        let responseValue = generateExpression(firstNumber, secondNumber, operator);
        let checkValue = generateCheckValue(firstNumber, secondNumber, operator);

        if (isAnswersEquel(responseValue, checkValue)) {
            rightAnswerScore++;
            alert('правильна відповідь');
        } else {
            wrongAnsweScore++;
            alert('не правильна відповідь');
            
            let count = 0;
            while (count < 2) {
                responseValue = generateExpression(firstNumber, secondNumber, operator);
                if (Math.abs(responseValue - checkValue) <= 0.1) {
                    alert('правильна відповідь');
                    rightAnswerScore++;
                    break;
                }
                count++;
                alert('не правильна відповідь');
                wrongAnsweScore++;
            }
        }
    }
    alert(`you have ${rightAnswerScore} right answers and ${wrongAnsweScore} wrong`);
}