let number = prompt("Введіть число");
// console.log(typeof(number));
number = Number(number);
// console.log(typeof(number));

let x = number % 2;

if (x == 0) {
    alert(number + " - це парне число");
}
else {
    alert("Непарне число");
}