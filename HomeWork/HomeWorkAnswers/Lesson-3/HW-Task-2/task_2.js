let currentDate = new Date();

let dayOfWeek = currentDate.getDay();

console.log(dayOfWeek);

let output = document.querySelector('#output');

if (dayOfWeek == 0){
    output.innerHTML = "Today is Sunday";
} else if (dayOfWeek == 1){
    output.innerHTML = "Today is Monday";
} else if (dayOfWeek == 2){
    output.innerHTML = "Today is Tuesday";
} else if (dayOfWeek == 3){
    output.innerHTML = "Today is Wednesday";
} else if (dayOfWeek == 4){
    output.innerHTML = "Today is Thursday";
} else if (dayOfWeek == 5){
    output.innerHTML = "Today is Friday";
} else if (dayOfWeek == 6){
    output.innerHTML = "Today is Saturday";
}