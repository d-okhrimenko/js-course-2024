// on button click action
document.querySelector("#btn").onclick = function (){ 
    
    // showing a prompt asking to enter a year number and checking if the user entered correct datda
    let getNum;
    do {
        getNum = prompt("Enter a year number.");
        getNum = parseInt(getNum);
    if (isNaN(getNum)) {
        alert('You entered incorrect symbols!');
    } else if (getNum < 0) {
        alert(`The number ${getNum} is less than 0. Please enter a year number greater than 0.`);
    } else if (getNum === 0) {
        alert(`The number ${getNum} equals 0. Please enter a year number greater than 0.`);
    }
} while (getNum <= 0);

// checks to ensure the year is leap
let getNum2 = getNum;

if (getNum2 % 4 === 0) {
    alert(`The year ${getNum2} is leap`);
}
else if (isNaN(getNum2)) {
    alert('The entered value is not a year number');
}
else {
    alert(`The year ${getNum2} is not leap`);
}

}


