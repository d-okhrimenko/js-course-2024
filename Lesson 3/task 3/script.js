function checkLeapYear() {
    // Введення року
    let userInput = prompt("Введіть рік:");

    // Перетворення введених даних на число
    let year = parseInt(userInput);

    // Перевірка введених даних на коректність
    if (isNaN(year)) {
        alert("Будь ласка, введіть коректний рік.");
    } else {
        // Перевірка на високосний рік
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            alert("Рік " + year + " є високосним.");
        } else {
            alert("Рік " + year + " не є високосним.");
        }
    }
}
