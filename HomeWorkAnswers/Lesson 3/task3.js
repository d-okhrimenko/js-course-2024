let year = parseInt(prompt("Введіть рік: "));
let isLeapYear;

if (isNaN(year)) {
    alert("Будь ласка, введіть коректне число.");
} else if (year % 400 === 0) {
    isLeapYear = true;
} else if (year % 100 === 0) {
    isLeapYear = false;
} else if (year % 4 === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

if (isLeapYear !== undefined) {
    if (isLeapYear) {
        alert(`${year} рік є високосним.`);
    } else {
        alert(`${year} рік не є високосним.`);
    }
}
