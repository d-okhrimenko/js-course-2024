let answerCorrect = 0;
let answerInCorrect = 0;

while (true) {
    let firstNumber;
    let secondNumber;
    let expression;
    let result;


    alert('Починаємо!');
    firstNumber = getNumber();
    secondNumber = getNumber();
    result = getResult();

    console.log(result);

    function getNumber() {
        return +(Math.random() * 1000).toFixed(2);
    }

    function getResult() {
        let value = ['+', '-', '*', '/'];
        let randomIndex = Math.floor(Math.random() * 4);
        expression = value[randomIndex];

        switch (randomIndex) {
            case 0:
                return +(firstNumber + secondNumber).toFixed(2);
                break;
            case 1:
                return +(firstNumber - secondNumber).toFixed(2);
            case 2:
                return +(firstNumber * secondNumber).toFixed(2);
            case 3:
                return +(firstNumber / secondNumber).toFixed(2);
                break;
        }
    }

    solution(result);

    function solution() {
        for (let i = 0; i < 3; i++) {
            let answer = +prompt("Розв'яжіть задачу" + '\n' + firstNumber + expression + secondNumber + '=');

            if (answer !== result && i === 2) {
                answerInCorrect++;
                alert('Ви прграли');
            } else if (answer !== result) {
                answerInCorrect++;
                alert('Невірно' + '\n' + 'Спроба ' + (i + 2));
            } else if (answer == result) {
                answerCorrect++;
                alert('Рішення вірне');
                break;
            }
        }
    }

    let value = prompt('Бажаєте продовжити');
    if (value !== 'так') {
        break;
    }
}

alert('Гру закінчено' + '\n' + 'Правильних відповідей ' + answerCorrect + '\n' + 'Не правильних відповідей ' + answerInCorrect);
