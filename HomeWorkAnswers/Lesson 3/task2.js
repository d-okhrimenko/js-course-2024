const today = new Date().getDay();
let out = document.querySelector(".outTask-2");

switch (today) {
  case 1:
    out.innerHTML = "Monday";
    break;
  case 2:
    out.innerHTML = "Tuesday";
    break;
  case 3:
    out.innerHTML = "Wednesday";
    break;
  case 4:
    out.innerHTML = "Thursday";
    break;
  case 5:
    out.innerHTML = "Friday";
    break;
  case 6:
    out.innerHTML = "Saturday";
    break;
  case 7:
    out.innerHTML = "Sunday";
    break;
}
