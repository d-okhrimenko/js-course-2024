let dateToday;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    dateToday = "Monday";
    break;
  case 2:
    dateToday = "Tuesday";
    break;
  case 3:
    dateToday = "Wednesday";
    break;
  case 4:
    dateToday = "Thursday";
    break;
  case 5:
    dateToday = "Friday";
    break;
  case 6:
    dateToday = "Saturday";
}

alert('Today is ' + dateToday) 