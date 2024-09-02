// Функция для обчислення середнього балу
function calculateAverage(grades) {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    return total / grades.length;
}

// Функция для знаходження найвищої оцінки
function findHighest(grades) {
    return Math.max(...grades);
}

// Функция для знаходження найнижчої оцінки
function findLowest(grades) {
    return Math.min(...grades);
}

// Функция для автоматического разделения чисел запятыми
function formatInput(value) {
    return value.replace(/(\d+)(?=\s|$)/g, '$1,').trim(); // Заменяет пробелы на запятые
}

// Основная логика программы
document.getElementById('grades').addEventListener('input', (event) => {
    const input = event.target.value;
    event.target.value = formatInput(input); // Форматируем ввод
});

document.getElementById('calculate').addEventListener('click', () => {
    const input = document.getElementById('grades').value;
    const grades = input.split(',').map(Number).filter(num => !isNaN(num) && num >= 0 && num <= 100);

    // Получение элемента для вывода сообщений об ошибках
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.style.display = 'none'; // Скрываем сообщение об ошибке

    // Проверка на наличие введенных оценок
    if (grades.length === 0) {
        errorMessageElement.textContent = "Будь ласка, введіть хоча б одну оцінку.";
        errorMessageElement.style.display = 'block'; // Показываем сообщение об ошибке
        return;
    }

    const average = calculateAverage(grades);
    const highest = findHighest(grades);
    const lowest = findLowest(grades);

    // Виводимо результати
    const averageMessage = `Середній бал: ${average.toFixed(2)}`;
    const highestMessage = `Найвища оцінка: ${highest}`;
    const lowestMessage = `Найнижча оцінка: ${lowest}`;

    // Відображаємо результати
    const averageElement = document.getElementById('average');
    const highestElement = document.getElementById('highest');
    const lowestElement = document.getElementById('lowest');

    averageElement.textContent = averageMessage;
    highestElement.textContent = highestMessage;
    lowestElement.textContent = lowestMessage;

    averageElement.style.display = 'block';
    highestElement.style.display = 'block';
    lowestElement.style.display = 'block';
});