"use strict";

//////////////////// MATH FUNCTIONS  //////////////////

//function for calculating  circumference of a circle
function calculateCircumference(radius) {
  const circumference = (2 * Math.PI * radius).toFixed(2);
  return circumference;
}

// function for calculating area of a circle
function calculateCircleArea(radius) {
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  return area;
}

//function for calculating  perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
  const perimeter = ((length + width) * 2).toFixed(2);
  return perimeter;
}

//function for calculating area of a rectangle
function calculateRectangleArea(length, width) {
  return (length * width).toFixed(2);
}

// function for calculating perimeter of a triangle
function calculateTrianglePerimeter(a, b, c) {
  const perimeter = (a + b + c).toFixed(2);
  return perimeter;
}

// function for calculating area of a triangle
function calculateTriangleArea(a, b, c) {
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
  return area;
}

// getting a random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function that takes an array of integers and return average
function getAverage(arr) {
  const sum = arr.reduce((acum, curr) => acum + curr, 0);
  return (sum / arr.length).toFixed(2);
}

// function that takes an array of integers and return minimum integer
function getMinInteger(arr) {
  return Math.min(...arr);
}

// function that takes an array of integers and return maximum integer
function getMaxInteger(arr) {
  return Math.max(...arr);
}

///////////////////  LEAP YEAR  ////////////////////

// function checking if year is a Leap year
const resultIsLeap = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return "leap";
  else return "not leap";
};

// function checking for use valid input for year
const isValid = function (data) {
  if (isNaN(+data) || +data < 0 || !Number.isInteger(+data)) {
    outputError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
};
const getInput = function (message, isValid) {
  const input = prompt(message);
  if (!isValid(input)) return;
  return input;
};

/////////////////////// VALIDATION //////////////////

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

/////////////// WORKING WITH ARRAYS /////////////

/////////////// WORKING WITH OBJECTS /////////////

function findObjectByProp(arr, key, value) {
  const object = arr.find((el) => el[key] === value);
  return object;
}

// print object properties with corresponding values to console
function printProps(obj) {
  let info = "";
  for (const [key, value] of Object.entries(obj)) {
    info =
      info +
      `${key}: ${value}
          `;
  }
  console.log(info);
}
