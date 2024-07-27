let year = prompt("Введіть рік:");
year = Number(year);
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) alert("Високосний");
else alert("Невисокосний");
