let today = new Date();
let dayOfWeek = today.getDay();
let message = '';

if (dayOfWeek === 0) {
    message = 'Сьогодні неділя';
} else if (dayOfWeek === 1) {
    message = 'Сьогодні понеділок';
} else if (dayOfWeek === 2) {
    message = 'Сьогодні вівторок';
} else if (dayOfWeek === 3) {
    message = 'Сьогодні середа';
} else if (dayOfWeek === 4) {
    message = 'Сьогодні четвер';
} else if (dayOfWeek === 5) {
    message = 'Сьогодні п\'ятниця';
} else if (dayOfWeek === 6) {
    message = 'Сьогодні субота';
}

function showOutput(message){
    let output = document.querySelector("#day_week");
    output.innerHTML = message;
}
console.log(message);
showOutput(message);