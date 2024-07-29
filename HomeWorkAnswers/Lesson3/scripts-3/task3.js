"use strict";

const btn = document.querySelector(".btn");
const outputYear = document.querySelector(".output__year");
const outputResult = document.querySelector(".output__result");
const outputError = document.querySelector(".output__error");

btn.addEventListener("click", function () {
  outputError.classList.add("hidden");
  const data = prompt("Enter integer number not equal to 0");
  showResult(isValid, data, result);
});
const result = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return "Leap year";
  else return "Not leap year";
};
function showResult(isValid, data, result) {
  if (isValid(data)) {
    const num = +data;
    outputYear.textContent = num;
    outputResult.textContent = result(num);
  }
}
const isValid = function (data) {
  if (isNaN(+data) || +data < 0 || !Number.isInteger(+data)) {
    outputError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
};
