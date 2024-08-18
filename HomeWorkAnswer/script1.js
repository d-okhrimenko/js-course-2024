"use strict";
let getMass = Number(prompt("Ваша вага, кг"));
let getHeigh = Number(prompt("Ваш зріст, м"));

function getBodyMassIndex(mass, height) {
    return (mass / Math.pow(height, 2)).toFixed(2);
}

function getCategoryBMI(bmi) {
    let category;
    if (bmi < 18.5) {
        category = "Недостатня ваг";
    } else if (18.5 <= bmi && bmi < 24.9) {
        category = "Нормальна вага";
    } else if (25 <= bmi && bmi < 29.9) {
        category = "Надмірна ваг";
    } else {
        category = "Ожиріння";
    }
    return category;
}

let bmi = getBodyMassIndex(getMass, getHeigh);
let cat = getCategoryBMI(bmi);
alert(`Індекс маси тіла дорівнює ${bmi}. Ваша категорія ${cat}`);



