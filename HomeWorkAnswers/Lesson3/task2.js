let currentDate = new Date();
let currentDayOfWeek = currentDate.getDay();
let output = document.querySelector('#output');
document.querySelector('#btn').onclick = function () {
    if (currentDayOfWeek === 0) {
        output.innerHTML = "Today is Sunday";
    }
    else if (currentDayOfWeek === 1) {
        output.innerHTML = "Today is Monday";
    }
    else if (currentDayOfWeek === 2) {
        output.innerHTML = "Today is Tuesday";
    }
    else if (currentDayOfWeek === 3) {
        output.innerHTML = "Today is Wednesday";
    }
    else if (currentDayOfWeek === 4) {
        output.innerHTML = "Today is Thursday";
    }
    else if (currentDayOfWeek === 5) {
        output.innerHTML = "Today is Friday";
    }
    else if (currentDayOfWeek === 6) {
        output.innerHTML = "Today is Saturday";
    }
}