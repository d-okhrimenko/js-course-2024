function checkNumber() {
    let inputNumber;
    while (true) {
        inputNumber = prompt("Input Number to START\nInput 'Q' to QUIT");
        if (inputNumber === 'q' || inputNumber === 'Q') {
            break;
        }
        inputNumber = Number(inputNumber);
        if (isNaN(inputNumber)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            continue;
        }
        if (inputNumber % 2 === 0) {
            alert("Number " + inputNumber + " is even.");
        } else {
            alert("Number " + inputNumber + " is odd.");
        }
    }
}

checkNumber();
