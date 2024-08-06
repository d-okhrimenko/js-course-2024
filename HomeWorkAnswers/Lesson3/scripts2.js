let currentDate = new Date();
let dateInfoRow = document.getElementById("current-day");
dateInfoRow.textContent += " " + currentDate.toLocaleDateString();
let day;
switch (currentDate.getDay()) {
  case 0:
    day = "Неділя";
    break;
  case 1:
    day = "Понеділок";
    break;
    case 2:
    day = "Вівторок";
    break;
    case 3:
    day = "Середа";
    break;
    case 4:
    day = "Четвер";
    break;
    case 5:
    day = "П'ятниця";
    break;
    case 6:
    day = "Субота";
    break;
}
let resultRow = document.getElementById("result");
resultRow.innerHTML = resultRow.textContent + " " + day;
 