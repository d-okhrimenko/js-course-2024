function calculateBMI(weight, height) {
    return weight / (height * height);
}

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

function bmiCalculator() {
    const weight = parseFloat(prompt("Введіть вашу вагу (в кілограмах):"));
    const height = parseFloat(prompt("Введіть ваш ріст (в метрах):"));

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Будь ласка, введіть коректні значення для ваги і росту.");
        return;
    }

    const bmi = calculateBMI(weight, height);

    const category = getBMICategory(bmi);

    alert(`Ваш Індекс Маси Тіла (ІМТ): ${bmi.toFixed(2)}\nКатегорія: ${category}`);
}

bmiCalculator();