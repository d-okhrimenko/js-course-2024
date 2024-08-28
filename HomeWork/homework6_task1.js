let grades = [];
let input;

function getGrades() {
    while (true) {
        input = prompt("Введіть оцінку студента (від 1 до 100) або натисніть 'Скасувати' для завершення:");

        if (input === null) {
            break;
        }

        let grade = Number(input);

        if (!isNaN(grade) && grade >= 1 && grade <= 100) {
            grades.push(grade);  
        } else {
            alert("Неправильне значення! Введіть ціле число від 1 до 100.");
        }
    }
}

function calculateAverage(grades) {
    let sum = grades.reduce((accumulator, grade) => accumulator + grade, 0);
    return sum / grades.length;
}

function findHighestGrade(grades) {
    return Math.max(...grades);
}

function findLowestGrade(grades) {
    return Math.min(...grades);
}

getGrades();

if (grades.length > 0) {
    let average = calculateAverage(grades);
    let highest = findHighestGrade(grades);
    let lowest = findLowestGrade(grades);

    alert(`Середній бал: ${average.toFixed(2)}\nНайвища оцінка: ${highest}\nНайнижча оцінка: ${lowest}`);
} else {
    alert("Не введено жодної оцінки.");
}
