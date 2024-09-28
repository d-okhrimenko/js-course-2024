"use strict";

let day = new Date();
let dayNumber = day.getDay();

switch (dayNumber) {
    case 0:
        console.log("Неділя");
        break;
    case 1:
        alert("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятніця");
        break;
    case 6:
        console.log("Субота");
        break;
}
