"use strict";

import { result, isValid } from "../../Utility scripts/leapYear.js";

const btn = document.querySelector(".btn");
const outputYear = document.querySelector(".output__year");
const outputResult = document.querySelector(".output__result");
const outputError = document.querySelector(".output__error");

btn.addEventListener("click", function () {
  outputError.classList.add("hidden");
  const data = prompt("Enter integer number not equal to 0");
  showResult(isValid, data, result);
});

function showResult(isValid, data, result) {
  if (isValid(data)) {
    const num = +data;
    outputYear.textContent = num;
    outputResult.textContent = result(num);
  }
}
