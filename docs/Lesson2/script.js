// SET DATE

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

// BTN CLICK

btn.onclick = function () {
  let btn = document.querySelector("#btn");
  let body = document.querySelector("body");
  let title = document.querySelector("h1");

  body.classList.toggle("light");
  title.classList.toggle("title-light");
  btn.classList.toggle("btn-light");

  btn.innerHTML = btn.innerHTML === "LIGHT MODE" ? "DARK MODE" : "LIGHT MODE";
};
