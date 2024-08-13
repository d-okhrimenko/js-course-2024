function calculateBMI(weight, height) {
    return weight / (height * height);
}

function determineBMICategory(bmi) {
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

let weight = parseFloat(prompt("Введіть вашу вагу в кг:"));
let height = parseFloat(prompt("Введіть ваш ріст в метрах:"));

let bmi = calculateBMI(weight, height);
let category = determineBMICategory(bmi);

alert("Ваш ІМТ: " + bmi.toFixed(2) + "\nКатегорія: " + category);