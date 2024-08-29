let inputYear;

do {
  inputYear = Number(prompt("Введіть рік"));

  if (inputYear % 1 == 0) {
    if (inputYear % 4 == 0) {
      if (inputYear % 100 == 0 && inputYear % 400 !== 0) {
        alert(" не високосний рік");
      } else {
        alert("високосний рік");
      }
    } else {
      alert("не високосний рік");
    }
  } else {
    alert("Incorrect year, please input only integer");
  }
} while (inputYear % 1 !== 0);
