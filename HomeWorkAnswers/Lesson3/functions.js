//task 1
function askValue() {
    let source = prompt("Type the value:");
    let msgIsEven = "The number is even";
    let msgIsOdd = "The number is odd";
    let msgValueIsIncorrect = "Incorrect value";
    let msgResult = "";

    let value = parseInt(source);
    if (isNaN(value)) {
        msgResult = `${msgValueIsIncorrect}: can't convert '${source}' to number`;
    }
    else {
        msgResult = isValueEven(value) ? msgIsEven : msgIsOdd;
    }
    alert(msgResult);
}

function isValueEven(value) {
    return value % 2 === 0;
}

//task 2
function getTodayDayName(date) {
    let dayNumber = date.getDay();
    let dayName;

    if (dayNumber === 0) {
        dayName = "Sunday";
    } else if (dayNumber === 1) {
        dayName = "Monday";
    } else if (dayNumber === 2) {
        dayName = "Tuesday";
    } else if (dayNumber === 3) {
        dayName = "Wednesday";
    } else if (dayNumber === 4) {
        dayName = "Thursday";
    } else if (dayNumber === 5) {
        dayName = "Friday";
    } else if (dayNumber === 6) {
        dayName = "Saturday";
    } else {
        dayName = "Invalid day";
    }

    return dayName;
}

//task 3

function askYear() {
    let source = prompt("Type the number of year:");
    let msgIsLeap = "is a leap year";
    let msgIsNotLeap = "is not a leap year";
    let msgValueIsIncorrect = "Incorrect value";
    let msgResult = "";

    let value = parseInt(source);
    if (isNaN(value)) {
        msgResult = `${msgValueIsIncorrect}: can't convert '${source}' to number of year`;
    }
    else {
        msgResult = isLeapYear(value) ? `${value} ${msgIsLeap}` : `${value} ${msgIsNotLeap}`;
    }
    alert(msgResult);
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}