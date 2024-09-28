"use strict";
const btn = document.querySelector(".btn");
const weightField = document.getElementById("weight");
const heightField = document.getElementById("height");
const bmiOutput = document.getElementById("bmiResult");
const categoryOutput = document.getElementById("bmiCategory");
const errorField = document.getElementById("error");

btn.addEventListener("click", renderResults);

function calculateBmi(weight, height) {
  const bmi = ((weight * 10000) / (height * height)).toFixed(1);
  return bmi;
}

function calculateCategory(bmi) {
  if (bmi < 18.5) return "Insufficient weight";
  else if (18.5 <= bmi || bmi < 24.9) return "Normal weight";
  else if (24.9 <= bmi || bmi < 29.9) return "Excessive weight";
  else if (29.9 <= bmi) return "Obesity";
}

function renderResults() {
  const inputWeight = getFormInput(weightField);
  const inputHeight = getFormInput(heightField);

  if (isValidWeight(inputWeight) && isValidHeight(inputHeight)) {
    const bmi = calculateBmi(inputWeight, inputHeight);
    const category = calculateCategory(bmi);
    bmiOutput.textContent = bmi;
    categoryOutput.textContent = category;
    weightField.value = heightField.value = "";
  } else {
    errorField.classList.remove("hidden");
    setTimeout(function () {
      errorField.classList.add("hidden");
      bmiOutput.textContent = categoryOutput.textContent = "";
    }, 2000);
    weightField.value = heightField.value = "";
  }
}
