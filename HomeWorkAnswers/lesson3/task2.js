let today = new Date().getDay();

switch (today) {
  case 0:
    document.querySelector("#today").innerHTML = "Неділя";
    break;
  case 1:
    document.querySelector("#today").innerHTML = "Понеділок";
    break;
  case 2:
    document.querySelector("#today").innerHTML = "Вівторок";
    break;
  case 3:
    document.querySelector("#today").innerHTML = "Середа";
    break;
  case 4:
    document.querySelector("#today").innerHTML = "Четвер";
    break;
  case 5:
    document.querySelector("#today").innerHTML = "П'ятниця";
    break;
  case 6:
    document.querySelector("#today").innerHTML = "Субота";
    break;
  default:
    document.querySelector("#today").innerHTML = "Хтозна який день";
    break;
}
