document.querySelector("#btn").onclick = function () {
  let dateInput = document.querySelector("#year");
  let output = document.querySelector("#output");
  let year = Number(dateInput.value);
  if (!isNaN(year) && year >= 0) {
    if (year % 4 == 0 && year % 100 != 0) {
      output.innerHTML = "Високосний рік";
    } else if (year % 100 == 0 && year % 400 == 0) {
      output.innerHTML = "Високосний рік";
    } else {
      output.innerHTML = "Не високосний рік";
    }
    output.style.color = "blue";
  } else {
    output.innerHTML = "Введіть коректний рік";
    output.style.color = "red";
  }
};
