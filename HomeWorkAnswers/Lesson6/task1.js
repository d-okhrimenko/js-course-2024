// Написати програму, яка аналізує список оцінок студентів і знаходить середній бал, найвищу та найнижчу оцінки.
const [allGrades, averageGrade, maxGrade, minGrade] = document.querySelectorAll('p');

const MAX = 100;
const gradesQuantity = 15;
const gradesArray = [];

function displayGrades () {
    const gradesArray = getAllGrades(MAX);
    const gradesStr = gradesArray.join(', ');
    const averageG = getAverageGrade(gradesArray);
    const maxG = getMaxGrade(gradesArray);
    const minG = getMinGrade(gradesArray);
    allGrades.innerHTML = `Оцінки студента: ${gradesStr}.`;
    averageGrade.innerHTML = `Середня оцінка: ${averageG}.`;
    maxGrade.innerHTML = `Найвища оцінка: ${maxG}.`;
    minGrade.innerHTML = `Найнижча оцінка: ${minG}.`;
}

function getAllGrades (max) {
    for (let i = 0; i<gradesQuantity; i++) {
        gradesArray.push(Math.floor(Math.random() * max))
    }
    console.log(gradesArray);
    return gradesArray;
}

function getAverageGrade (arr) {
    const sumOfGrades = arr.reduce((prev, curr) => prev + curr);
    const result = (sumOfGrades / arr.length).toFixed();
    return result;
}

function getMaxGrade (arr) {
    return Math.max(...arr);
}

function getMinGrade (arr) {
    return Math.min(...arr);
}

displayGrades()
