let temp = +prompt("Введіте рік для перевірки на високосність");
if (!isNaN(temp)) {
  if (temp % 4 == 0) {
    document.querySelector("#output").innerHTML =
      "Введений рік " + temp + " є високісним";
  } else {
    document.querySelector("#output").innerHTML =
      "Введений рік " + temp + "  не є високісним";
  }
} else {
  document.querySelector("#output").style.color = "red";
  document.querySelector("#output").innerHTML = "Ви ввели некоректні данні";
}
