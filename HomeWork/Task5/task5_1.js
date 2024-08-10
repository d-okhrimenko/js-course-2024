function calculateBMI(weight, height) {
  const bmi = weight / ((height / 100) ** 2);
  return bmi.toFixed(2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Недостаточный вес";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Нормальный вес";
  } else if (bmi >= 25 && bmi < 30) {
    return "Избыточный вес";
  } else {
    return "Ожирение";
  }
}

const weight = parseFloat(prompt("Введите свой вес (кг):"));
const height = parseFloat(prompt("Введите свой рост (см):"));

const bmi = calculateBMI(weight, height);
const category = getBMICategory(bmi);

console.log(`%cВаш индекс массы тела (BMI): ${bmi}`, "color: red");
console.log(`%cКатегория: ${category}`, "color: red");
