const userNum = Number(prompt("Введіть число"));

if (!isNaN(userNum)) {
    alert("Дані введено вірно");

    if (userNum % 2 === 0) {
        alert("Число парне");
    } else {
        alert("Число непарне");
    }
} else {
    alert("Некоректні дані");
}