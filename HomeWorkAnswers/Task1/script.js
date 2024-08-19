function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert("Будь ласка, введіть коректні значення для ваги і зросту.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let category = "";

  if (bmi < 18.5) {
    category = "Недостатня вага";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Нормальна вага";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Надмірна вага";
  } else if (bmi >= 30) {
    category = "Ожиріння";
  }

  document.getElementById("result").textContent = `Ваш ІМТ: ${bmi.toFixed(
    2
  )}. Категорія: ${category}.`;
}
