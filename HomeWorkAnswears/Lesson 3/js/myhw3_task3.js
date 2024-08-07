"use strict";

let isYear366 =  prompt("Чи є рік високосним? Введіть рік для перевірки", "2024");
isYear366 = Number(isYear366);
// console.log(typeof isYear366);
// console.log(isYear366);

// console.log(new Date(isYear366, 1, 29).getDate());
let isFebruary29 = new Date(isYear366, 1, 29);

if (isFebruary29.getDate() == 29) {
    alert(isYear366 + " рік є високосним!")
} else {
    alert("Цей рік не є високосним.")
}