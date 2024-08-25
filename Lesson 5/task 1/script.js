function calculateBMI() {
    // Отримуємо значення ваги і росту
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInput = document.getElementById('height').value;

    // Функція для перевірки правильності введення зросту
    function isValidHeight(height) {
        return /^\d+\.\d{1,2}$/.test(height);
    }

    // Перевірка правильності введених даних
    if (isNaN(weight) || weight <= 0 || !isValidHeight(heightInput)) {
        alert('Будь ласка, введіть коректні значення ваги та росту (зріст повинен бути у форматі метри, наприклад, 1.75).');
        return;
    }

    const height = parseFloat(heightInput);

    // Обчислення ІМТ
    const bmi = weight / (height * height);

    // Визначення категорії ІМТ
    let category = '';
    if (bmi < 18.5) {
        category = 'Недостатня вага';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Нормальна вага';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Надмірна вага';
    } else {
        category = 'Ожиріння';
    }

    // Виведення результату
    const resultText = `Ваш ІМТ: ${bmi.toFixed(2)}. Категорія: ${category}.`;
    document.getElementById('result').innerText = resultText;
}

