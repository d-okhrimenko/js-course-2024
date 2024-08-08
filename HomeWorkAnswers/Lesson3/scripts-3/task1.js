"use strict";

const btn = document.querySelector(".btn");
const outputNumber = document.querySelector(".output__number");
const outputResult = document.querySelector(".output__result");
const outputError = document.querySelector(".output__error");

btn.addEventListener("click", function () {
  outputError.classList.add("hidden");
  const data = prompt("Enter integer number not equal to 0");
  showResult(isValid, data, result);
});

const result = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

function showResult(isValid, data, result) {
  if (isValid(data)) {
    const num = +data;
    outputNumber.textContent = num;
    outputResult.textContent = result(num);
  }
}

const isValid = function (data) {
  if (isNaN(+data) || +data === 0 || !Number.isInteger(+data)) {
    outputError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
};
