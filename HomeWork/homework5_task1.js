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

let weight = parseFloat(prompt("Введіть вашу вагу в кілограмах:"));
let height = parseFloat(prompt("Введіть ваш зріст в метрах (наприклад, 1.75):"));

let bmi = calculateBMI(weight, height);
let category = getBMICategory(bmi);

alert("Ваш ІМТ: " + bmi.toFixed(2) + "\nКатегорія: " + category);
