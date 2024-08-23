// Визначення індексу маси тіла
function getBodyMassIndex(weight, height) {
    return weight / (height * height);
}
// Визначення категорії ІМТ
function getCategoryBMI(bmi) {
    if (bmi < 18.5) {
        return "У Вас недостатня вага";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        return "У Вас нормальна вага";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return "У Вас надмірна вага";
    }
    else if (bmi >= 30) {
        return "У Вас ожиріння, рекомендовано звернути увагу на своє здоров'я";
    }
}
// Запит даних користувача
while (true) {
let weight = Number(prompt("Вкажіть свою вагу тіла в кілограмах, наприклад 55.4"));
let height = Number(prompt("Вкажіть свій зріст у метрах, наприклад 1.72"));
// Перевірка даних користувача
let inValid = isNaN(weight)||isNaN(height)||weight==""||height==""||weight<=0||height<=0;
if (inValid === true) {
    alert ("Вибачте, Ви ввели некоректне значення.")
    continue;
    // Обчислення ІМТ користувача
} else {
    let bmi = getBodyMassIndex(weight,height);
    let userCategoryBMI = getCategoryBMI(bmi);
    alert(`Індекс Вашої маси тіла ${bmi.toFixed(1)} \n${userCategoryBMI} `)
} break;
}