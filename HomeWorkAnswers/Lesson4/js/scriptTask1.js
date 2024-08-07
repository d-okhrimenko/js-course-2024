while (true) {
    let userValue = prompt("Введіть число:");
    if (isNaN(userValue)) {
        alert("Це не число!");
    } else {
        alert("Дякуємо за число!");
    }
}
