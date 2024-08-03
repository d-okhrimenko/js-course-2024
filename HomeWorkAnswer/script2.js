"use strict";
const MAX = 10;
const MIN = 1;
const N = 5;
let answer, getNumber, number, expression;
let right = 0;
let r = 0;

for (let i = 0; i < N; i++) {
    right = getAnswer();
}

alert(`Правильно  ${right} з ${N} `);

function getValuesExpression() {
    let number1 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    let number2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    let operand = Math.floor(Math.random() * (4));
    return { number1, number2, operand };
}

function getAnswer() {
    let { number1, number2, operand } = getValuesExpression();
    if (operand == 0) {
        answer = (number1 > number2) ? Math.floor(number1 / number2) : Math.floor(number2 / number1);
        let text = 'Вводьте тільки цілу частину без десяткової ';
        expression = (number1 > number2) ? `${text} ${number1} / ${number2} = ?` : `${text} ${number2} / ${number1} = ?`;
    } else if (operand == 1) {
        answer = Math.abs(number1 - number2);
        expression = (number1 > number2) ? `${number1} - ${number2} = ?` : `${number2} - ${number1} = ?`;
    } else if (operand == 2) {
        answer = number1 + number2;
        expression = `${number1} + ${number2} = ?`;
    } else {
        answer = number1 * number2;
        expression = `${number1} * ${number2} = ?`;
    }
    getNumber = prompt(expression);
    number = Number(getNumber);
    if (answer == number) {
        r++;
    }
    return r;
}



