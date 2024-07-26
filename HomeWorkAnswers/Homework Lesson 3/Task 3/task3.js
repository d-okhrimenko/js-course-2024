function isLeapYear() {
    let inputYear;
    while (true) {
        inputYear = prompt("Input Year to START\nInput 'Q' to QUIT");
        if (inputYear === 'q' || inputYear === 'Q') {
            break;
        }
        inputYear = Number(inputYear);
        if (isNaN(inputYear)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            continue;
        }
        if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
            alert("The " + inputYear + " year is Leap!");
        } else {
            alert("The " + inputYear + " year is Not Leap!");
        }
    }
}

isLeapYear();
