"use strict";

const btn = document.querySelector(".btn");
const boxDate = document.querySelector(".current-date");
const boxTime = document.querySelector(".current-time");

btn.addEventListener("click", function () {
  const date = new Date();
  //   console.log(date);
  const today = date.toLocaleDateString();
  //   console.log(today);
  const time = date.toLocaleTimeString();
  //   console.log(time);
  boxDate.textContent = today;
  boxTime.textContent = time;
});
