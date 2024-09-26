let sign = prompt("Введіть число");
let value = parseInt(sign);


if (Number.isInteger(value) && value % 2 === 0) {
    alert("Парне число")
} else {
    alert("Непарне число");
}
