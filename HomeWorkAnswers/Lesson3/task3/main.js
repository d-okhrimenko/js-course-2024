let myYear = prompt("Введіть рік!");

if (myYear === null || myYear.trim() === "") {
  alert("Ви не ввели рік!");
} else {
  myYear = parseInt(myYear, 10);

  if (isNaN(myYear)) {
    alert("Ви ввели не число!");
  } else if (myYear < 1000 || myYear > 9999) {
    alert("Ви ввели некоректний рік! Будь ласка, введіть чотиризначне число.");
  } else {
    // Перевірка на високосний рік
    if ((myYear % 4 === 0 && myYear % 100 !== 0) || myYear % 400 === 0) {
      alert(`${myYear} - це високосний рік!`);
    } else {
      alert(`${myYear} - це не високосний рік.`);
    }
  }
}
