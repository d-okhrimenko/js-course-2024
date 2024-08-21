let minInputGrade = 0;
let maxInputGrade = 100;
let quantityOfGrades = 20;

const getAverageGrade = (grades) =>
    (
        grades.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        ) / grades.length
    ).toFixed(2);

const getMinGrade = (grades) => Math.min(...grades);

const getMaxGrade = (grades) => Math.max(...grades);

const getRandomNumberInRange = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

function getListGrades(quantity) {
    let gradeList = [];
    for (let index = 0; index < quantity; index++) {
        gradeList.push(getRandomNumberInRange(minInputGrade, maxInputGrade));
    }
    return gradeList;
}

function studentGrades() {
    let gradesList = getListGrades(quantityOfGrades);
    let maxGrade = getMaxGrade(gradesList);
    let averageGrade = getAverageGrade(gradesList);
    let minGrade = getMinGrade(gradesList);
    alert(
        `Список оцінок: ${gradesList} \nНайвищий бал: ${maxGrade}\nСередній бал: ${averageGrade}\nМінімальний бал: ${minGrade}`
    );
}
