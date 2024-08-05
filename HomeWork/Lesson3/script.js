const btn_1 = document.getElementById("task_1_btn");
const btn_2 = document.getElementById("task_2_btn");
const btn_3 = document.getElementById("task_3_btn");
btn_1.addEventListener("click", function () {
  let number = parseInt(prompt("Введіть своє число: "));
  if (!isNaN(number)) {
    if (number % 2 == 0) {
      alert("Число є парним");
    } else alert("Число є непарним");
  } else alert("Введено не число, натисніть знову кнопку та введіть число");
});

btn_2.addEventListener("click", function () {
  let day_of_week = new Date();
  switch (day_of_week.getDay()) {
    case 0:
      alert("Неділя");
      break;
    case 1:
      alert("Понеділок");
      break;
    case 2:
      alert("Вівторок");
      break;
    case 3:
      alert("Середа");
      break;
    case 4:
      alert("Четвер");
      break;
    case 5:
      alert("П'ятниця");
      break;
    case 6:
      alert("Субота");
      break;
    default:
      alert("Сталася помилка");
  }
});

btn_3.addEventListener("click", function () {
  let year = new Date();
  Number(year.getFullYear());

  let user_year = parseInt(prompt("Введіть рік: "));

  if (user_year % 4 == 0) {
    alert("Введений рік - високосний");
  } else alert("Введений рік - не високосний");
});
