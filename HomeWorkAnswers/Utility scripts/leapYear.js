"use strict";

// function checking if year is a Leap year
export const result = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return "Leap year";
  else return "Not leap year";
};

// function checking for use valid input for year
export const isValid = function (data) {
  if (isNaN(+data) || +data < 0 || !Number.isInteger(+data)) {
    outputError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
};
