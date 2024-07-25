let value1 = prompt("Введіть ціле число");

value1 = Number(value1);

if (isNaN(value1)) {
    alert("Введене значення не є числом");
} else {
    if (!Number.isInteger(value1)) {
        alert("Введене значення не є цілим числом");
    } else {
        if (value1 % 2 === 0) {
            alert("Число є парним");
        } else {
            alert("Число є непарним");
        }
    }
}