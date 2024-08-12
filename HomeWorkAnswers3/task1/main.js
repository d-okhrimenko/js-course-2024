let inputNumber;

do {
    inputNumber = Number(prompt("Input number"));

    if (inputNumber % 1 == 0) {
        if (inputNumber % 2 == 0) {
            alert("Your number is even")
        } else {
            alert("Your number is odd")
        }
    } else {
        alert("Incorrect number, please input only integer")
    }
} while (inputNumber % 1 !== 0);


