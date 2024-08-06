//2.	Створіть сторінку яка виводить на екран поточну дату.

let now = new Date();
//Варіант 1
alert(now);
//Варіант 2
console.log(now);
//Варіант 3
function showCurrentDate() {
  let currentDate = document.querySelector("#current_date");
  currentDate.innerHTML = "Поточна дата:" + now;
}
showCurrentDate();

//3.	Створіть кнопку на сторінці з текстом "Скажи привіт",
//зробіть щоб при кліку по кнопці виводилося повідомлення "Привіт {name}"
//де замість { name } буде виводитися ваше ім'я.

document.querySelector("#say_hi_btn").onclick = function () {
  alert("Привіт, Таня!");
};
