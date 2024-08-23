const userAnswer = Number(prompt("Введіть число"));
if (Number.isInteger(userAnswer)) {
    console.log("true");
} else {
    console.log("false");
    alert("Вводити треба ціле число");
}
let even
let odd
if (userAnswer % 2 === 0) {
    alert("Парне число");
    console.log("even");
}
if (userAnswer % 2 === 1) {
    alert("Непарне число");
    console.log("odd");
}