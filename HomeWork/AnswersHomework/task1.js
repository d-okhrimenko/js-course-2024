// Функція для обчислення ІМТ
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Функція для визначення категорії ІМТ
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Недостатня вага";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Нормальна вага";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Надмірна вага";
    } else {
        return "Ожиріння";
    }
}

// Запит ваги і росту користувача
let weight = parseFloat(prompt("Введіть вашу вагу в кілограмах:"));
let height = parseFloat(prompt("Введіть ваш зріст у метрах:"));

// Перевірка, чи введені значення коректні
if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Будь ласка, введіть коректні значення ваги та зросту.");
} else {
    // Обчислення ІМТ
    let bmi = calculateBMI(weight, height);
    
    // Визначення категорії ІМТ
    let category = getBMICategory(bmi);
    
    // Виведення результату
    alert("Ваш ІМТ: " + bmi.toFixed(2) + "\nКатегорія: " + category);
}
