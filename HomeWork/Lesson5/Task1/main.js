// // BMI formula
function calculateBmi(weight, height) {
  return weight / (height * height);
}

// Get user weight/height and calculate & display user BMI result on click
let userWeight;
let userHeight;
let bmiResult;

document.querySelector("#submit").onclick = function () {
  userWeight = Number(document.querySelector("#userWeight").value);
  userHeight = Number(document.querySelector("#userHeight").value) / 100;
  bmiResult = Number(calculateBmi(userWeight, userHeight).toFixed(1));

  if (bmiResult < 18.5) {
    alert("Недостаня вага");
  } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
    alert("Нормальна вага");
  } else if (bmiResult >= 25 && bmiResult < 29.9) {
    alert("Надмірна вага");
  } else if(bmiResult >= 30) {
    alert("Ожиріння");
  } else {
    alert("Введіть вагу і зріст");
  }
  document.querySelector("#userWeight").value = "";
  document.querySelector("#userHeight").value = "";
};

