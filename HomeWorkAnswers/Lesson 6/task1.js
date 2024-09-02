// 1. Створити масив для зберігання оцінок студентів:
let grades = [];

// 2. Створити функцію для обчислення середнього балу:
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// 3. Створити функцію для знаходження найвищої оцінки:
function findHighestGrade(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}

// 4. Створити функцію для знаходження найнижчої оцінки:
function findLowestGrade(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}

// 5. Запросити користувача ввести кілька оцінок і зберегти їх у масив:
let numberOfGrades = prompt("Скільки оцінок ви хочете ввести?");
for (let i = 0; i < numberOfGrades; i++) {
    let grade = parseInt(prompt(`Введіть оцінку №${i + 1}:`), 10);
    if (grade >= 0 && grade <= 100) {
        grades.push(grade);
    } else {
        alert("Будь ласка, введіть оцінку від 0 до 100.");
        i--; // Повторний запит на правильну оцінку
    }
}

// 6. Обчислити середній бал, найвищу і найнижчу оцінки:
let average = calculateAverage(grades);
let highest = findHighestGrade(grades);
let lowest = findLowestGrade(grades);

// 7. Вивести результати:
alert(`Середній бал: ${average.toFixed(2)}`);
alert(`Найвища оцінка: ${highest}`);
alert(`Найнижча оцінка: ${lowest}`);