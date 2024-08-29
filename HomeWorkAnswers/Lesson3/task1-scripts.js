// Завдання 1
// Написати програму, яка визначає, чи є введене число парним або непарним.

let userNumber = +prompt("Введіть ціле число");
isUserNumInt();
function isUserNumInt() {
  if (Number.isInteger(userNumber)) {
    if (userNumber % 2 == 0) {
      alert("Парне число");
    } else {
      alert("Непарне число");
    }
  } else {
    alert("Введені дані не є цілим числом");
  }
}
