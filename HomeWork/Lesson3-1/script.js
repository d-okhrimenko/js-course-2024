let num;
num = Number(prompt("Enter number"));


if (Number.isInteger(num)) {
  let result = num % 2 === 0 ? "Your number is even" : "Your number is odd";
  alert(result);
} else {
  alert("Incorrect data. Please enter integer number");
}
