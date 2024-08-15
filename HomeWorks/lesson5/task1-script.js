function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    const height = heightCm / 100;

    const bmi = weight / (height * height);

    let category = '';
    if (bmi < 18.5) {
        category = 'Недостатня вага';
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        category = 'Нормальна вага';
    } else if (bmi >= 25 && bmi <= 29.99) {
        category = 'Надмірна вага';
    } else if (bmi >= 30) {
        category = 'Ожиріння';
    }

    alert(`Ваш ІМТ: ${bmi.toFixed(2)}\nКатегорія: ${category}`);
}