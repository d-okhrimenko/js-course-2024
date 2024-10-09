while (true) {
    let userInput = prompt("Enter a number");

    if (Number.isInteger(Number(userInput))) {
        ifEven(userInput)
    } else {
        alert("Будь ласка, введіть ціле число.");
    }

    function ifEven(number) {
        if (number % 2 == 0) {
            alert("this number is even");
        } else {
            alert("this number is odd");
        }
    }
}

