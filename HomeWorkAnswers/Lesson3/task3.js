let yearInput = prompt("Введіть рік:");
let year = Number(yearInput);
if (isNaN(year)) {
  alert("Введено некоректне число. Будь ласка, введіть рік.");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(`${year} рік є високосним.`);
  } else {
    alert(`${year} рік не є високосним.`);
  }
}