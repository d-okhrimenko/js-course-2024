const inputYear = Number(prompt("Введіть рік"));
const isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1;
if (isNaN(inputYear)) {
  alert("Введіть числове значення року");
} else if (isLeapYear(inputYear)) {
  alert("Високосний рік");
} else {
  alert("He Високосний рік ");
}
