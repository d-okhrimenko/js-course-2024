// Функція для обчислення середнього балу
function calculateAverage(grades) {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Функція для знаходження найвищої оцінки
function findHighestGrade(grades) {
    return Math.max(...grades);
}

// Функція для знаходження найнижчої оцінки
function findLowestGrade(grades) {
    return Math.min(...grades);
}

// Функція для перевірки коректності оцінок
function isValidGrade(grade) {
    return Number.isInteger(grade) && grade >= 0 && grade <= 100;
}

// Функція для обробки оцінок
function getGrades() {
    let input = prompt("Введіть оцінки через кому (наприклад, 85,90,78):");
    let grades = input.split(',').map(Number);

    // Перевірка на коректність введення
    if (grades.some(isNaN) || grades.length === 0 || !grades.every(isValidGrade)) {
        alert("Будь ласка, введіть коректні числові оцінки в межах від 0 до 100 через кому.");
        return;
    }

    // Обчислення середнього балу, найвищої і найнижчої оцінки
    const average = calculateAverage(grades);
    const highest = findHighestGrade(grades);
    const lowest = findLowestGrade(grades);

    // Виведення результатів
    const resultText = `
        Середній бал: ${average.toFixed(2)}
        Найвища оцінка: ${highest}
        Найнижча оцінка: ${lowest}
    `;

    document.getElementById('result').innerText = resultText;
}
