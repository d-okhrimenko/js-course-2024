alert("Сьогодні " + getWeekDay());

function getWeekDay() {
  let day;

  switch (new Date().getDay()) {
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
  }

  return day;
}
