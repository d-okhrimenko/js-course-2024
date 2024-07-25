function checkInput() {
    let inputValue;
    while (true) {
        inputValue = Number(prompt("Input number"));
        if (isNaN(inputValue)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            continue;
        }
        if (inputValue % 2 === 0) {
            alert("Number " + inputValue + " is even.");
            continue;
        }
        alert("Number " + inputValue + " is odd.");
    }
}

checkInput();
