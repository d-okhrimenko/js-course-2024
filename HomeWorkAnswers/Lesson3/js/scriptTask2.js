const output = document.querySelector('#output');

let todaysDayId = new Date().getDay();

let dayOfWeek = getDayOfWeek(todaysDayId);

function getDayOfWeek(dayId) {
    switch (dayId) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'No value found';
    }
}

output.innerHTML = `Today is ${todaysDayId} day of the week. It is ${dayOfWeek}!`;
