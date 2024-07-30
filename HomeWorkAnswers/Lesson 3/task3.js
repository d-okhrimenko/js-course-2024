function leapYear() {
  let year = +document.querySelector(".inputTask-3").value;
  let out = document.querySelector(".outTask-3");

  if (isNaN(year)) {
    out.textContent = "рік введено не корректно";
  } else if (year % 400 === 0) {
    out.textContent = "високосний";
  } else if (year % 100 === 0) {
    out.textContent = "не високосний";
  } else if (year % 4 === 0) {
    out.textContent = "високосний";
  } else {
    out.textContent = "не високосний";
  }
}
document.querySelector(".btnTask-3").onclick = leapYear;
