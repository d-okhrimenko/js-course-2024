let number = +prompt("Enter a number");
number = Number(number);

while (isNaN(number)) {
    number = prompt("Please, Enter a number");
}
if (number % 2 === 0) {
    alert(`The number ${number} is Even`);
}
else if (number % 2 === 1) {
    alert(`The number ${number} is Odd`);
}