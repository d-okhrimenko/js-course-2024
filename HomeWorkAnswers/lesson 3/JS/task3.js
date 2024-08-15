checkYear();

function isItLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

function checkYear() {
  let year = Number(prompt("Введіть рік"));
  let msg;

  if (typeof year == "number" && !isNaN(year) && year > 0)
    msg = `${year} рік - ` + ((isItLeapYear(year) )? "" : "не") + " високосний";
  else msg = "Введено не коректне значення року";

  alert(msg);
}
