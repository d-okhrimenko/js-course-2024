"use strict";

const btnCircle = document.getElementById("btn-circle");
const btnRect = document.getElementById("btn-rectangle");
const btnTriangle = document.getElementById("btn-triangle");
const optionField = document.getElementById("figure-option-choice");
const errorField = document.getElementById("error");

function renderRadiusResults() {
  const radiusField = document.getElementById("radius");
  const circumferenceOUtput = document.getElementById("perimeter-circle");
  const areaOutput = document.getElementById("area-circle");
  const inputRadius = getFormInput(radiusField);

  if (isValidPositiveNumber(inputRadius)) {
    const circumference = calculateCircumference(+inputRadius);
    const area = calculateCircleArea(+inputRadius);
    circumferenceOUtput.textContent = `${circumference} units`;
    areaOutput.textContent = `${area} square units`;
  } else {
    revealError();
  }
}

function renderRectangleResults() {
  const lengthField = document.getElementById("length");
  const widthField = document.getElementById("width");
  const perimeterOutput = document.getElementById("perimeter-rectangle");
  const areaOutput = document.getElementById("area-rectangle");
  let inputLength = getFormInput(lengthField);
  let inputWidth = getFormInput(widthField);

  if (isValidPositiveNumber(inputLength) && isValidPositiveNumber(inputWidth)) {
    const perimeter = calculateRectanglePerimeter(+inputLength, +inputWidth);
    const area = calculateRectangleArea(inputLength, inputWidth);
    perimeterOutput.textContent = `${perimeter} units`;
    areaOutput.textContent = `${area} square units`;
  } else {
    revealError();
  }
}

function renderTriangleResults() {
  const side1Field = document.getElementById("side1");
  const side2Field = document.getElementById("side2");
  const side3Field = document.getElementById("side3");
  const perimeterOutput = document.getElementById("perimeter-triangle");
  const areaOutput = document.getElementById("area-triangle");
  const inputSide1 = getFormInput(side1Field);
  const inputSide2 = getFormInput(side2Field);
  const inputSide3 = getFormInput(side3Field);

  if (
    isValidPositiveNumber(inputSide1) &&
    isValidPositiveNumber(inputSide2) &&
    isValidPositiveNumber(inputSide3) &&
    isValidTriangle(+inputSide1, +inputSide2, +inputSide3)
  ) {
    const perimeter = calculateTrianglePerimeter(+inputSide1, +inputSide2, +inputSide3);
    const area = calculateTriangleArea(+inputSide1, +inputSide2, +inputSide3);
    perimeterOutput.textContent = `${perimeter} units`;
    areaOutput.textContent = `${area} square units`;
  } else {
    revealError();
  }
}

function updateFormVisibility() {
  const formCircle = document.getElementById("form-circle");
  const formRect = document.getElementById("form-rectangle");
  const formTriangle = document.getElementById("form-triangle");
  const option = getFormInput(optionField).toLowerCase();

  if (option === "circle") {
    formCircle.classList.remove("hidden");
    formRect.classList.add("hidden");
    formTriangle.classList.add("hidden");
  } else if (option === "rectangle") {
    formCircle.classList.add("hidden");
    formRect.classList.remove("hidden");
    formTriangle.classList.add("hidden");
  } else if (option === "triangle") {
    formCircle.classList.add("hidden");
    formRect.classList.add("hidden");
    formTriangle.classList.remove("hidden");
  }
}

window.addEventListener("load", updateFormVisibility);
optionField.addEventListener("change", updateFormVisibility);
btnCircle.addEventListener("click", renderRadiusResults);
btnRect.addEventListener("click", renderRectangleResults);
btnTriangle.addEventListener("click", renderTriangleResults);
