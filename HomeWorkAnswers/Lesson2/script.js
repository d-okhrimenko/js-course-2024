let dateAndTime = document.querySelector("#date");

let currentDate = new Date();
let hour = currentDate.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[currentDate.getDay()];

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

let date = currentDate.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear();

dateAndTime.innerHTML = `${day}, ${date} ${month} ${year}, ${hour}:${minutes}`;

btn.onclick = function () {
  let btn = document.querySelector("#btn");
  let body = document.querySelector("body");
  let title = document.querySelector("h1");

  if (body.classList.contains("dark")) {
    btn.innerHTML = "DARK MODE";
    body.classList.remove("dark");
    body.classList.add("light");
    btn.classList.remove("btn-dark");
    btn.classList.add("btn-light");
    title.classList.remove("title-dark");
    title.classList.add("title-light");
  } else {
    btn.innerHTML = "LIGHT MODE";
    body.classList.remove("light");
    body.classList.add("dark");
    btn.classList.remove("btn-light");
    btn.classList.add("btn-dark");
    title.classList.remove("title-light");
    title.classList.add("title-dark");
  }
};