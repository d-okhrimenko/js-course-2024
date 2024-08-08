let userYear = prompt("Введіть рік, щодо якого бажаєте отримати інформацію");
userYear = Number(userYear);
console.log(userYear);
if (Number.isInteger(userYear), userYear > 0) {
    console.log(true)
} else {
    console.log(false);
    alert("Вводити необхідно рік нашої ери");
}
if (userYear % 4 === 0) {
    alert("Цей рік є високосним");
} else {
    alert("Цей рік не є високосним");
}
