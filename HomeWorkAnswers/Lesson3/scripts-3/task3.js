"use strict";

const btn = document.querySelector(".btn");
const outputYear = document.querySelector(".output__year");
const outputResult = document.querySelector(".output__result");
const outputError = document.querySelector(".output__error");

btn.addEventListener("click", function () {
  outputError.classList.add("hidden");
  showResult(getInput, isValid, resultIsLeap);
});

function showResult(getInput, isValid, resultIsLeap) {
  const data = getInput("Enter integer number not equal to 0");
  if (isValid(data)) {
    const num = +data;
    outputYear.textContent = num;
    outputResult.textContent = resultIsLeap(num);
  }
}
