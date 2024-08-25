function checkEvenOdd() {
    // Введення числа
    let userInput = prompt("Введіть число:");

    // Перетворення введених даних на число
    let number = parseInt(userInput);

    // Перевірка введених даних на коректність
    if (isNaN(number)) {
        alert("Будь ласка, введіть коректне число.");
    } else {
        // Перевірка на парність
        if (number % 2 === 0) {
            alert("Число " + number + " є парним.");
        } else {
            alert("Число " + number + " є непарним.");
        }
    }
}
