



// Task 3
let currentYear = prompt("Put current year");
currentYear = parseInt(currentYear);

if (!isNaN(currentYear)) {
    if (currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0) {
        alert ("This year is a leap year");
    } else {
        alert ("This year is not a leap year");
    }
} else {
    alert ("Put the correct year");
}