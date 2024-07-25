const input = prompt('Будь ласка, введіть рік:');
const userYear = Number(input);

if (isNaN(userYear)) {
  alert('Будь ласка, введіть коректний рік');
} else {
  const isLeapYear = (userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0;
  isLeapYear ? alert(`Рік ${userYear} є високосним`) : alert(`Рік ${userYear} є невисокосним`);
}
