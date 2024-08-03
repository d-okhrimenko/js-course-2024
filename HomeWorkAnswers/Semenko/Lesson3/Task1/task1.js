let temp = Number(prompt("Введіть число:"));

if (!isNaN(temp)) {
  if (temp % 2 == 0) {
    document.querySelector("#output").innerHTML =
      "Введене число " + temp + " є парним";
  } else {
    document.querySelector("#output").innerHTML =
      "Введене число " + temp + " є непарним";
  }
} else {
  document.querySelector("#output").style.color = "red";
  document.querySelector("#output").innerHTML = "Ви ввели некоректні данні";
}
