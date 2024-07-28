let input = prompt("Введіть рік:");

let year = Number(input);

if (isNaN(year) || year <= 0) {
  alert("Ви ввели некоректний рік. Спробуйте ще раз.");
} else {
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeapYear) {
    alert(`${year} рік є високосним.`);
  } else {
    alert(`${year} рік не є високосним.`);
  }
}
