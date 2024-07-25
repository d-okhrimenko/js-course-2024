let currentDate = new Date();
let myDay = currentDate.getDay();

let para = document.querySelector("#result");

let daysOfWeek = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

para.innerHTML = daysOfWeek[myDay];
