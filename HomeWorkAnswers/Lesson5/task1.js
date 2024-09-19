// Написати програму, яка обчислює індекс маси тіла (ІМТ) і дає рекомендації на основі отриманого значення.
const userWeight = document.querySelector('#weight');
const userHeight = document.querySelector('#height');
const btnCalculate = document.querySelector('#btn-calc');
const btnCancel = document.querySelector('#btn-cancel');
const result = document.querySelector('#result');

const NORMAL = 18.5;
const OVERWEIGHT = 25;
const OBESITY = 30;

let isContinue;


btnCalculate.addEventListener('click', getBMICategory);
btnCancel.addEventListener('click', cleanResult);


function getBMICategory () {
    isContinue = true;
    let weightValue = getValue(userWeight);
    let heightValue = getValue(userHeight);
    if (isContinue) {
        const heightToMeters = heightValue/100;
        let BMI = calculateBMI(weightValue, heightToMeters);
        showResult(BMI);
    }
}

function cleanResult () {
    userWeight.value = ' ';
    userHeight.value = ' ';
    result.innerHTML = ' ';
}

function getValue (userInput) {
    let isValid = !isNaN(userInput.value) && userInput.value !== "" && userInput.value !== null;
    if(isValid) {
        return Number(userInput.value);
    } else {
        isContinue = false;
        result.innerHTML = 'Виникла помилка! Введіть число більше 0';
    }
    }

let calculateBMI = (weight, height) => weight/Math.pow(height, 2);

function showResult (BMI) {
    if (BMI < NORMAL) {
       result.innerHTML = 'Ви маєте недостатню вагу';
    } else if (BMI >= OBESITY) {
        result.innerHTML = 'У вас ожиріння!';
    } else if (BMI >= NORMAL && BMI < OVERWEIGHT) {
        result.innerHTML = 'Ваша вага в межах норми';
    }  else {
        result.innerHTML = 'Ви маєте надлишкову вагу';
    }
}







