function checkLeapYear() {
  const userInput = prompt("Введіть рік:");
  const year = parseInt(userInput, 10);

  if (isNaN(year)) {
    alert("Будь ласка, введіть коректний рік.");
    return;
  }

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeap) {
    alert(`Рік ${year} є високосним.`);
    return;
  }

  alert(`Рік ${year} не є високосним.`);
  return;
}
