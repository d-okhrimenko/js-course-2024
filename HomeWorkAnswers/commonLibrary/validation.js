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
  if (!Number.isInteger(Number(value)) || 
  value <= 0) {
    alert("Invalid number 💩. Number should be bigger than 0 ❗  Reload page and try again.");
    return false;
  }

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

function isValidStringInput(value, arr) {
  if (!arr.some((el) => value.toLowerCase() === el)) {
    alert(`⛔ Invalid input 💩. 
      Please enter value from the list 
      ["a", "r", "p"].
      Reload page and try again.`);
    return false;
  } else {
    return true;
  }
}

// function that returns user input without validation
function getWithoutValidation(message) {
  const input = prompt(message);
  return input;
}

//function that returns user input, validated against predefined array of legal values
const getMatchedInput = function (message, checkingFunc, legalValues) {
  let input;
  do {
    input = prompt(message).toLowerCase();
  } while (!checkingFunc(input, legalValues));
  return input;
};

// functions that validates user input against array of legal values
function isMatchingString(value, arr) {
  if (!arr.some((el) => value === el)) {
    alert(`⛔ Invalid input 💩.
        Please enter value from the list
        ${arr}.
        Try again.`);
    return false;
  } else {
    return true;
  }
}
