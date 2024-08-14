"use strict";

// function validating user input for weight
function isValidWeight(weight) {
  const minWeight = 2;
  const maxWeight = 300;
  const numWeight = Number.parseFloat(weight);
  // prettier-ignore
  if (Number.isNaN(numWeight) ||
    numWeight <= 0 ||
    numWeight < minWeight ||
    numWeight > maxWeight) return false;
  else return true;
}

// function validating user input for height
function isValidHeight(height) {
  const minHeight = 40;
  const maxHeight = 250;
  const numHeight = Number.parseFloat(height);
  // prettier-ignore
  if (Number.isNaN(numHeight) ||
    numHeight <= 0 || 
    numHeight < minHeight || 
    numHeight > maxHeight) return false;
  else return true;
}

//function fetching user input
function getFormInput(inputField) {
  return inputField.value;
}

// function validating user input to be  a positive number
function isValidPositiveNumber(value) {
  //prettier-ignore
  if (Number.isNaN(value) || 
  value <= 0) return false;
  return true;
}

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function revealError() {
  errorField.classList.remove("hidden");
  setTimeout(function () {
    errorField.classList.add("hidden");
  }, 2000);
}
