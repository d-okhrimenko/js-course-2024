// Завдання 2
// Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.

//Варіант 1

let now = new Date();
let options = { weekday: "long" };
let weekdayDisplay = new Intl.DateTimeFormat("uk-UA", options).format(now);

function showCurrentWeekday() {
  let current_weekday = document.querySelector("#current_weekday");
  current_weekday.innerHTML = "Сьогодні " + weekdayDisplay + ".";
}
showCurrentWeekday();

//Варіант 2

const currentDate = new Date();
let dayOfWeek = currentDate.getDay();
console.log(currentDate);
console.log(dayOfWeek);

if (dayOfWeek == 0) {
  weekdayName = "неділя";
} else {
  if (dayOfWeek == 1) {
    weekdayName = "понеділок";
  } else {
    if (dayOfWeek == 2) {
      weekdayName = "вівторок";
    } else {
      if (dayOfWeek == 3) {
        weekdayName = "середа";
      } else {
        if (dayOfWeek == 4) {
          weekdayName = "четвер";
        } else {
          if (dayOfWeek == 5) {
            weekdayName = "п'ятниця";
          } else {
            weekdayName = "субота";
          }
        }
      }
    }
  }
}

function showCurrentWeekdayV2() {
  let current_weekday_v2 = document.querySelector("#current_weekday_v2");
  current_weekday_v2.innerHTML = "Сьогодні " + weekdayName + ".";
}
showCurrentWeekdayV2();
