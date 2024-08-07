let year = prompt("Введіть рік");

year = parseInt(year);

if (isNaN(year)) alert("Введене некоректне значення");

if (year % 400 === 0) {
  alert(year + " Рік - є високосним");
}
if (year % 100 === 0) {
  alert(year + " Рік - не є високосним ");
}
if (year % 4 === 0) {
  alert(year + " Рік - є високосним");
} else {
  alert(year + " Рік - не є високосним ");
}
