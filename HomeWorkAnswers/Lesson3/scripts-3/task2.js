"use strict";

const btn = document.querySelector(".btn");
const span = document.querySelector(".weekDay");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

btn.addEventListener("click", function () {
  span.textContent = "";
  const date = new Date();
  const index = date.getDay();
  console.log(index);
  showDay(day, index, daysOfWeek);

  setTimeout(function () {
    span.textContent = "";
  }, 3000);
});

const day = (arr, i) => {
  if (i === 0) return arr[0];
  else if (i === 1) return arr[1];
  else if (i === 2) return arr[2];
  else if (i === 3) return arr[3];
  else if (i === 4) return arr[4];
  else if (i === 5) return arr[5];
  else if (i === 6) return arr[6];
};

function showDay(day, i, arr) {
  span.textContent = day(arr, i);
}
