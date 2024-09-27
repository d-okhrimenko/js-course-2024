let getValue = (selector) => Number(document.querySelector(selector).value);

let calculateBmi = () => {
  let weight = getValue('#weight');
  let height = getValue('#height');
  return (weight / Math.pow(height, 2)).toFixed(2);
};

let bmiCategories = (bmi) => {
  if (bmi < 18.5) return `Underweight: ${bmi} < 18.5`;
  else if (bmi < 24.9) return `Normal weight: 18.5 ≤ ${bmi} < 24.9`;
  else if (bmi < 29.9) return `Overweight: 25 ≤ ${bmi} < 29.9`;
  else return `Obesity: ${bmi} ≥ 30`;
};

function showBmi() {
  document.querySelector('#bmi').innerHTML = bmiCategories(calculateBmi());
}

document.querySelector('#btnCalculateBmi').onclick = showBmi;
