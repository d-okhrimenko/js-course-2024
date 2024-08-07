let userNumber = prompt('Put your number');
userNumber = parseInt(userNumber);

if (!isNaN(userNumber)) {
    if (userNumber % 2 === 0) {
        alert("Number is even");
    } else {
        alert("Number is odd");
    }
} else {
    alert ("Put the correct number");
}