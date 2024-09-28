"use strict";

let rightAnswersCount = 0;
let wrongAnswersCount = 0;

let result;

while (true) {
    let randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    
    const operators = ["+", "-", "*", "/"];
    
    const randomOperator = operators[Math.floor(Math.random() * 4)];
    
    const answer = prompt(
        `Порахуй ${randomNumber1} ${randomOperator} ${randomNumber2}`
    );
    
    switch (randomOperator) {
        case "+":
            result = randomNumber1 + randomNumber2;
            break;
        case "-":
            result = randomNumber1 - randomNumber2;
            break;
        case "*":
            result = randomNumber1 * randomNumber2;
            break;
        case "/":
            randomNumber1 = randomNumber1 * randomNumber2;
            result = randomNumber1 / randomNumber2;
            break;
    }
    
    if (answer == result) {
        alert(
            ` Правільна відповідь! \n Кількість правильних відповідей: ${++rightAnswersCount} \n Кількість неправильних відповідей: ${wrongAnswersCount}`
        );
    } else {
        alert(
            ` Неправільна відповідь! \n Кількість правильних відповідей: ${rightAnswersCount} \n Кількість неправильних відповідей: ${++wrongAnswersCount}`
        );
    }    
}

