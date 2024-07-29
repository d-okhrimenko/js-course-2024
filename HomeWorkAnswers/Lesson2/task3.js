"use strict";
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const output = document.querySelector(".output");
  const fName = document.querySelector('[name = "fname"]');
  //   console.log(fName);
  const lName = document.querySelector('[name = "lname"]');
  //   console.log(fName);
  if (!fName.value || !lName.value) {
    output.textContent = "Please, fill in all the fields!";
    output.classList.add("error");
  } else {
    output.classList.remove("error");
    output.classList.add("success");
    output.textContent = `Hello ${fName.value} ${lName.value}!`;
    fName.value = "";
    lName.value = "";
  }
});
