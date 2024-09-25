// Функція для перевірки коректності введених даних
function checkArr(array) {
    let countElem = array.length;
    for (let i = 0; i < countElem; i++) {
        if (array[i] < 0 || array[i] > 100 || isNaN(array[i])) {
            alert("Помилка!!! Введіть оцінки від 0 до 100");
            return false;
        }
    }
    return true;
}

// Функція для обчислення середнього балу
function avg(array) {
    let sum = 0;
    let numberOfGrades = array.length;
    for (const value of array) {
        sum += value;
    }
    let avgGrade = sum / numberOfGrades;
    return avgGrade.toFixed(2);
}

// Функція для знаходження найвищої оцінки
function max(array) {
    return Math.max(...array);
}

// Функція для знаходження найнижчої оцінки
function min(array) {
    return Math.min(...array);
}

// Функція для введення даних користувачем (рядок перетворює в масив, trim - забирає зайві пробіли на початку і в кінці рядка)    
function getGradesFromUser() {
    let numbersInput = document.querySelector("#grades").value;
    return numbersInput.split(" ").map(num => parseFloat(num.trim()));
}

// Обробка події натискання кнопки
document.querySelector("#btn").onclick = function () {
    let gradesArray = getGradesFromUser();
    if (!checkArr(gradesArray)) {
        return; // Якщо є помилка, зупиняємо виконання
    }

    avgResult = avg(gradesArray);
    maxResult = max(gradesArray);
    minResult = min(gradesArray);

    alert(`Середній бал - ${avgResult} \nНайвища оцінка - ${maxResult} \nНайнижча оцінка - ${minResult}`);
};