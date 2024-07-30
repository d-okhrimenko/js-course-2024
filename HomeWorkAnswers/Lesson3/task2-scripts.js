// Завдання 2
// Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.

// Кроки для виконання завдання:

// Отримання поточної дати:
// - Використайте об'єкт Date для отримання поточної дати.

// Визначення дня тижня:
// - Використайте метод getDay() об'єкта Date для отримання дня тижня (0 для неділі, 1 для понеділка і т.д.).

// Виведення результату:
// - Використайте оператор if для визначення дня тижня і виведення відповідного повідомлення.
//Варіант 1
// let now = new Date();
// let options = { weekday: "long" };
// let weekdayDisplay = new Intl.DateTimeFormat("uk-UA", options).format(now);

// function showCurrentWeekday() {
//   let current_weekday = document.querySelector("#current_weekday");
//   current_weekday.innerHTML = "Сьогодні " + weekdayDisplay + ".";
// }
// showCurrentWeekday();
//Варіант 2
const currentDate = new Date();
let dayOfWeek = currentDate.getDay();
if ((dayOfWeek = 0)) {
  weekdayName = "Неділя";
} else {
  if ((dayOfWeek = 1)) {
    weekdayName = "Понеділок";
  } else {
    if ((dayOfWeek = 2)) {
      weekdayName = "Вівторок";
    } else {
      if ((dayOfWeek = 3)) {
        weekdayName = "Середа";
      } else {
        if ((dayOfWeek = 4)) {
          weekdayName = "Четвер";
        } else {
          if ((dayOfWeek = 5)) {
            weekdayName = "П'ятниця";
          } else {
            weekdayName = "Субота";
          }
        }
      }
    }
  }
}
console.log(currentDate);
console.log(dayOfWeek);
function showCurrentWeekdayV2() {
  let current_weekday_v2 = document.querySelector("#current_weekday_v2");
  current_weekday_v2.innerHTML = "Сьогодні " + weekdayName + ".";
}
showCurrentWeekdayV2();
