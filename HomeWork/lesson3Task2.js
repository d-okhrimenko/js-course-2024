const currentDate = new Date();
const currentDay = currentDate.getDay();

switch (currentDay) {
  case 0:
    getDayOfWeak("неділя");
    break;

  case 1:
    getDayOfWeak("понеділок");
    break;

  case 2:
    getDayOfWeak("вівторок");
    break;

  case 3:
    getDayOfWeak("середа");
    break;

  case 4:
    getDayOfWeak("четвер");
    break;
  case 5:
    getDayOfWeak("п'ятниця");
    break;

  case 6:
    getDayOfWeak("субота");
    break;

  default:
    " ";
    break;
}

function getDayOfWeak(dayName) {
  const day = document.querySelector("#day");
  day.innerHTML = dayName;
}
