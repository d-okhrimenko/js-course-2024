const tasks = 5;
const attempt = 3;

let firstNumber;
let secondNumber;
let operator;
let result;
let randomInstance;
let correctAnswers = 0;

for (let i = 1; i <= tasks; i++) {
        firstNumber = getNumber();
        secondNumber = getNumber();
        operator = getOperator();
        result = Math.round(getResult());
        randomInstance = `${firstNumber} ${operator} ${secondNumber}`;
    
        alert(randomInstance);
    
        for(let j = attempt; j>0; j--) {
            
            let answer = getAnswer();

            console.log('ett' + attempt);

            if(answer ===  result) {
                correctAnswers = correctAnswers + 1;
                alert (`Вірно! ${randomInstance} = ${answer}`);
                
                break;
            } else {
                if(j === 1) {
                    alert('Всі спроби вичерпано! Переходь до наступного  виразу');
                    break;
                } 
            let attemptCount = j - 1;
            alert(`Невірно! Ти маєш ще ${attemptCount} спроби. \n Скільки буде ${randomInstance} ?`)
            }
    
        }
        if(i === tasks) {
            alert(`Квіз завершено! \n Ти дав ${correctAnswers} правильних відповідей з ${tasks}`)
        }
}





function getNumber () {
    return Math.floor(Math.random() * 100) + 1;
}

function getOperator () {
    let randomeOperator = Math.floor(Math.random() * 4) + 1;
    if (randomeOperator === 1) {
        return '+';
    } else if (randomeOperator === 2) {
        return '-';
    } else if (randomeOperator === 3) {
        return '*'; 
    } else {
        return '/'; 
    }
}
function getResult() {
    if(operator === '+') {
        return firstNumber + secondNumber
    } else if (operator === '-') {
        return firstNumber - secondNumber
    } else if (operator ==='*') {
        return firstNumber * secondNumber
    } else {
        return firstNumber / secondNumber
    }
}

function getAnswer () {
    
    return Number(prompt('Введіть правильну відповідь'))
}