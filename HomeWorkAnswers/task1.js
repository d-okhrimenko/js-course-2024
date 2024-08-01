let userValue = Number(prompt("Введіть число більше або менше 0"));
let remainder

if (isNaN(userValue) || userValue == 0) {
    let userValue = alert("Введено не коректне число");
}
else {
    remainder = userValue % 2;
    console.log("залишок " + remainder);
    if (remainder == 0) {
        alert("Введене число - парне");
    }
    else {
        alert("Введене число - не парне");
    }
}

