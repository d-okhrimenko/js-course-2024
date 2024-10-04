while (true) {
    let userYear = prompt("Enter a year:");

    if (Number.isInteger(Number(userYear))) {
        ifLeapYear(userYear);
    } else {
        alert("Будь ласка, введіть ціле число.");
    }

    function ifLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert(`${year} leap year`);
        } else {
            alert(`${year} not a leap year`);
        }
    }
}