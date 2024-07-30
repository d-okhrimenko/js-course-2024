"use strict";

if (document.querySelector("#task1")) {
    let getNumber = prompt("Введіть число");
    let number = Number(getNumber);
    if (number) {
        if (number % 2 == 0) {
            alert(`Число ${number} є парним`);
        } else {
            alert(`Число ${number} є непарним`);
        }
    } else {
        alert(`${getNumber} - це не число. Спробуйте ще раз`);
    }
}

if (document.querySelector("#task2")) {
    let data = document.querySelector("#data");
    let dayWeek = new Date().getDay();
    let daysWeek = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    data.innerHTML = "Сьогодні "+daysWeek[dayWeek];
    /*if (dayWeek == 0) {
        data.innerHTML = "Сьогодні неділя";
    } else if (dayWeek == 1) {
        data.innerHTML = "Сьогодні понеділок";
    } else if (dayWeek == 2) {
        data.innerHTML = "Сьогодні вівторок";
    } else if (dayWeek == 3) {
        data.innerHTML = "Сьогодні середа";
    } else if (dayWeek == 4) {
        data.innerHTML = "Сьогодні четвер";
    } else if (dayWeek == 5) {
        data.innerHTML = "Сьогодні п'ятниця";
    } else {
        data.innerHTML = "Сьогодні субота";
    }*/
}

if (document.querySelector("#task3")) {
    let getYear = prompt("Введіть рік");
    let year = Number(getYear);
    if (year) {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            alert(`Рік ${year}  високосний`);
        } else {
            alert(`Рік ${year} не високосний`);
        }
    } else {
        alert(`${getYear} - це не рік. Спробуйте ще раз`);
    }
}