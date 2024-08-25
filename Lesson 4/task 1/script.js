function startGame() {
    let userScore = 0;
    let computerScore = 0;
    let play = true;

    while (play) {
        // Введення вибору користувача
        let userChoice = prompt("Введіть ваш вибір (камінь, ножиці, папір) або 'вихід' для завершення гри:").toLowerCase();

        // Перевірка на вихід
        if (userChoice === "вихід") {
            play = false;
            break;
        }

        // Перевірка коректності введення
        if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
            alert("Некоректний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.");
            continue;
        }

        // Генерація вибору комп'ютера
        let choices = ["камінь", "ножиці", "папір"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Визначення переможця
        let result;
        if (userChoice === computerChoice) {
            result = "Нічия!";
        } else if (
            (userChoice === "камінь" && computerChoice === "ножиці") ||
            (userChoice === "ножиці" && computerChoice === "папір") ||
            (userChoice === "папір" && computerChoice === "камінь")
        ) {
            result = "Ви виграли!";
            userScore++;
        } else {
            result = "Ви програли!";
            computerScore++;
        }

        // Виведення результату
        alert("Ваш вибір: " + userChoice + "\nВибір комп'ютера: " + computerChoice + "\nРезультат: " + result);
        document.getElementById("score").innerText = `Рахунок: Ви - ${userScore}, Комп'ютер - ${computerScore}`;
    }

    alert("Гра завершена! Остаточний рахунок:\nВи - " + userScore + "\nКомп'ютер - " + computerScore);
}
