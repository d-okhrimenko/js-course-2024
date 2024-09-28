"use strict";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const fName = document.querySelector('[name = "fname"]');
//   console.log(fName);
const lName = document.querySelector('[name = "lname"]');
//   console.log(fName);

btn.addEventListener("click", function () {
  output.classList.remove("success", "error");

  if (!fName.value || !lName.value) {
    output.textContent = "Please, fill in all the fields!";
    output.classList.add("error");
  } else {
    output.classList.add("success");
    output.textContent = `Hello ${fName.value} ${lName.value}!`;
    fName.value = "";
    lName.value = "";
  }

  [fName, lName].forEach((el) => {
    el.addEventListener("input", function () {
      output.textContent = "";
    });
  });
});
