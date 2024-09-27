"use strict";

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
