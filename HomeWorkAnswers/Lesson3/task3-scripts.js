// Завдання 3
// Написати програму, яка перевіряє, чи є введений рік високосним.
//якщо рік кратний 4 і не кратний 100 або рік кратний 400 тоді - рік високосний

let userNumber = +prompt("Введіть рік");
let userError = "Введено некоректний формат року.";
isYearValid();
function isYearValid() {
  if (Number.isInteger(userNumber)) {
    if (userNumber <= 9999 && userNumber > 0) {
      isYearLeap();
    } else {
      alert(userError);
    }
  } else {
    alert(userError);
  }
}
function isYearLeap() {
  if (
    (userNumber % 4 == 0 && userNumber % 100 !== 0) ||
    userNumber % 400 == 0
  ) {
    alert("Високосний рік");
  } else {
    alert("Невисокосний рік");
  }
}
