let year = Number(prompt("Введіть рік"));

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    alert("Це високосний рік");
} else {
    alert("Це не високосний рік");
}
