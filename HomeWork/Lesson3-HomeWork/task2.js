let date = new Date();
let result = date.getDay();
let day;

document.querySelector('#date').innerHTML = date;
console.log(date);

if (result == 0) {
    day = "Воскрксенье"
    out();
} else if (result == 1) {
    day = "Понедельник"
    out();
} else if (result == 2) {
    day = "Вторник"
    out();
} else if (result == 3) {
    day = "Среда"
    out();
} else if (result == 4) {
    day = "Четверг"
    out();
} else if (result == 5) {
    day = "Пятница"
    out();
} else {
    day = "Суббота"
    out();
}

function out() {
    console.log(day);
    document.querySelector('#day').innerHTML = day;
}

