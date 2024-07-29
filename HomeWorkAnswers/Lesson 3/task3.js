let yearInput = prompt("Введіть рік:");
let year = parseInt(yearInput);
if (isNaN(year)) {
  alert("Будь ласка, введіть коректне число.");
} else {
  if (year % 4 === 0) {
    alert(year + " рік є високосним.");
  } else {
    alert(year + " рік не є високосним.");
  }
}
