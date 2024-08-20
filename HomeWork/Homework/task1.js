// Функція для обчислення середнього балу
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// Функція для знаходження найвищої оцінки
function findHighestGrade(grades) {
    return Math.max(...grades);
}

// Функція для знаходження найнижчої оцінки
function findLowestGrade(grades) {
    return Math.min(...grades);
}

// Запитуємо користувача ввести кілька оцінок і зберігаємо їх у масив
let grades = [];
let numberOfGrades = prompt("Скільки оцінок ви хочете ввести?");
for (let i = 0; i < numberOfGrades; i++) {
    let grade = parseInt(prompt(`Введіть оцінку ${i + 1}:`));
    grades.push(grade);
}

// Обчислюємо середній бал, найвищу і найнижчу оцінки
let average = calculateAverage(grades);
let highest = findHighestGrade(grades);
let lowest = findLowestGrade(grades);

// Виводимо результати
console.log(`Середній бал: ${average.toFixed(2)}`);
console.log(`Найвища оцінка: ${highest}`);
console.log(`Найнижча оцінка: ${lowest}`);
