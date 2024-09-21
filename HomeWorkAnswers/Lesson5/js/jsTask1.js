while (true) {
    let bodyWeight = (prompt('Введіть значення маси тіла в кілограмах'));

    let height = (prompt('Введіть значення росту в метрах "наприклад 1,70" '));

    let getBMI = (bodyWeight, height) =>
        (bodyWeight / Math.pow(height, 2)).toFixed(1);

    let bmi = getBMI(bodyWeight, height);

    let getBMIcategory = (bmi) => {
        if (bmi < 18.5) {
            return "Недостатня вага";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Нормальна вага";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "Надмірна вага";
        } else if (bmi >= 30) {
            return "Ожиріння";
        } else {
            return "Введіть коректне значення";
        }
    }
    let result = getBMIcategory(bmi);

    alert(`Результат: "${result}", ІМТ: ${bmi}`);
}