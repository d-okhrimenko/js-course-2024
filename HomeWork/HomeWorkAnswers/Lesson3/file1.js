let value1 = prompt("Please enter a number");
console.log(value1);

value1 = Number(value1);
console.log("Type = " + typeof (value1));

let res = value1 % 2;
const remainder = 1;
if (res == 1) {
    alert("Непарне число");
}
else {
    alert("Парне число");
}
