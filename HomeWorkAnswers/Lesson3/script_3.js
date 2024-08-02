let enteredYear = prompt('Please enter a year');
enteredYear = parseInt(enteredYear, 10);

if (isNaN(enteredYear) || enteredYear <= 0) {
    alert('Please enter a valid positive number for the year.');
} else {
    if ((enteredYear % 4 === 0 && enteredYear % 100 !== 0) || (enteredYear % 400 === 0)) {
        alert(enteredYear + ' is a leap year.');
    } else {
        alert(enteredYear + ' is not a leap year.');
    }
}