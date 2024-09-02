function playRound() {
    let userChoice = prompt("Виберіть: камінь, ножиці або папір (або введіть 'вихід' для завершення гри)").toLowerCase();

    if (userChoice === "вихід") {
        return "exit";
    }

    const choices = ["камінь", "ножиці", "папір"];
    if (!choices.includes(userChoice)) {
        alert("Неправильний вибір, спробуйте знову.");
        return playRound();
    }

    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    let result = "";
    if (userChoice === computerChoice) {
        result = "Нічия!";
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        result = "Ви виграли!";
    } else {
        result = "Ви програли!";
    }

    alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}`);

    return result === "Ви виграли!" ? "user" : (result === "Ви програли!" ? "computer" : "draw");
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let drawCount = 0;

    while (true) {
        const roundResult = playRound();

        if (roundResult === "exit") {
            break;
        }

        if (roundResult === "user") {
            userScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        } else if (roundResult === "draw") {
            drawCount++;
        }

        alert(`Рахунок:\nВи: ${userScore}\nКомп'ютер: ${computerScore}\nНічиї: ${drawCount}`);
    }

    alert(`Гра завершена!\nПідсумковий рахунок:\nВи: ${userScore}\nКомп'ютер: ${computerScore}\nНічиї: ${drawCount}`);
}

playGame();