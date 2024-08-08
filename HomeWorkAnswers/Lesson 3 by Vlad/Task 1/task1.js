let getNum;

do {
    getNum = prompt("Enter a number."); // asking the user to enter a number
    getNum = parseInt(getNum); // parsing the entered value to the number

    // checking if the number is correct
    if (isNaN(getNum)) {
        alert('You entered incorrect symbols!');
    } else if (getNum < 0) {
        alert(`The number ${getNum} is less than 0. Please enter a number greater than 0.`);
    } else if (getNum === 0) {
        alert(`The number ${getNum} equals 0. Please enter a number greater than 0.`);
    }
} while (getNum <= 0);

// checks whether the number is even or not
let getNum2 = getNum;

if (getNum2 % 2 === 0) {
    alert(`The number ${getNum2} is even`);
}
else if (isNaN(getNum2)) {
    alert('The entered value is not a number');
}
else {
    alert(`The number ${getNum2} is odd`);
}

