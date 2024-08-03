let currentDay = new Date();
console.log(currentDay);
console.log(currentDay.getDay());
switch (currentDay.getDay()) {
  case 0:
    document.querySelector("#day").innerHTML = "Сьогодні - Неділя!";
    break;
  case 1:
    document.querySelector("#day").innerHTML = "Сьогодні - Понеділок!";
    break;
  case 2:
    document.querySelector("#day").innerHTML = "Сьогодні - Вівторок!";
    break;
  case 3:
    document.querySelector("#day").innerHTML = "Сьогодні - Середа!";
    break;
  case 4:
    document.querySelector("#day").innerHTML = "Сьогодні - Четвер!";
    break;
  case 5:
    document.querySelector("#day").innerHTML = "Сьогодні - П'ятниця!";
    break;
  case 6:
    document.querySelector("#day").innerHTML = "Сьогодні - Субота!";
    break;
}
