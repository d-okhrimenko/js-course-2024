"use strict";

let year = prompt("Введіть рік");
let yearNumber = Number(year);

if (year == yearNumber) {
    if (
        (yearNumber % 4 == 0 && yearNumber % 100 != 0) ||
        yearNumber % 400 == 0
    ) {
        alert(`${yearNumber} високосний рік`);
    } 
    alert(`${yearNumber} невисокосний рік`);
} else {
    alert("Введіть рік!");
}
