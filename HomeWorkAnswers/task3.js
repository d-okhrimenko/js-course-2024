let userValue = Number(prompt("Введіть бажаний рік, на перевірку чи являється він високосним"));
console.log(userValue);

if (isNaN(userValue) || userValue == 0) {
    let userValue = alert("Введено не коректне значення року");
}
else if ((userValue % 4 == 0 && userValue % 100 !== 0) || userValue % 400 == 0) {
    alert("Введений рік " + userValue + " є високосним");
}
else {
    alert("Введений рік " + userValue + " не високосний");
}