function getNumericValue(message) {
  while (true) {
    const value = prompt(message);
    const isValid =
      !isNaN(value) && value !== "" && value !== null && value >= 0;
    if (isValid) return Number(value);
  }
}

const calculateIMT = (m, h) => m / Math.pow(h / 100, 2);

function getCategoryIMT(imt) {
  let result = `Індекс маси тіла: ${imt.toFixed(1)}`;
  if (imt < 18.5) {
    result = `${result} - недостатня маса тіла`;
  } else if (imt >= 18.5 && imt < 24.9) {
    result = `${result} - нормальна маса тіла`;
  } else if (imt >= 25 && imt < 29.9) {
    result = `${result} - надмірна маса тіла`;
  } else if (imt >= 30) {
    result = `${result} - ознака ожиріння`;
  }
  return result;
}

function showResult(result) {
  alert(result);
  console.log(result);
}

const mass = getNumericValue("Введіть вашу вагу у кілограмах");
const height = getNumericValue("Введіть ваш ріст у сантиметрах");

const imt = calculateIMT(mass, height);
const result = getCategoryIMT(imt);

showResult(result);
