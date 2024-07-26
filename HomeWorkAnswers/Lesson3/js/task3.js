document.querySelector("#btn-check").onclick = function () {
  let year = Number(document.querySelector("#inputYear").value);
  // Перевірка на число
  if (Number.isInteger(year)) {
    // Якщо рік ділиться на 4 без остачі
    if (year % 4 == 0) {
      //Якщо рік не ділиться на 100 або рік ділиться на 100 проте також ділиться на 400.
      if (year % 100 != 0 || (year % 100 == 0 && year % 400 == 0)) {
        showResult("Рік високосний");
      } else {
        showResult("Рік не високосний");
      }
    }
  } else {
    showResult("Введіть коректне значення року!");
  }
};

document.querySelector("#inputYear").onclick = function () {
  showResult("");
  document.querySelector("#inputYear").value = "";
};

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}
