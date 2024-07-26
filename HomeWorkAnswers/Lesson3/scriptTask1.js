let number = prompt("Enter a number");
number = parseInt(number);
if (!isNaN(number)) {
    if (number % 2 == 0) {
        alert("Even number");
    }
    else {
        alert("Not an even number");
    }
}
