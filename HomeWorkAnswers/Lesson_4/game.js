function getValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

let playerWin = 0;
let compWin = 0;
for (let i = 0; i < 3; i++) {

    let playerChoice = getValue("Введіть цифру, яка відповідає обраному значенню Камінь 1, Ножиці 2, Папір 3. Натисніть буд'яке число для виходу");
    let options = ["Камінь", "Ножиці", "Папір"];

    if (playerChoice >= 1 && playerChoice <= 3) {

        let compChoice = Math.floor(Math.random() * 3) + 1;
        console.log(compChoice);

        if (playerChoice == compChoice) {
            alert("Нічия! " + "Ваш вибір: " + options[playerChoice - 1] + ". Вибір комп'ютера: " + options[compChoice - 1] + ".");

        } else if (playerChoice == 1 && compChoice == 2 || playerChoice == 2 && compChoice == 3 || playerChoice == 3 && compChoice == 1) {
            alert("Ви виграли!" + "Ваш вибір: " + options[playerChoice - 1] + ". Вибір комп'ютера: " + options[compChoice - 1] + ".");
            playerWin = playerWin + 1;
        } else {
            alert("Ви програли" + "Ваш вибір: " + options[playerChoice - 1] + ". Вибір комп'ютера: " + options[compChoice - 1] + ".");
            compWin = compWin + 1;
        }
    } else {
        alert("Ви введи невірне значення. Оновіть сторінку і спробуйте ще");
    }
}
console.log(playerWin);
console.log(compWin);

if (playerWin > compWin) {
    alert("Ви виграли з рахунком: " + playerWin + ":" + compWin);
} else if (playerWin < compWin) {
    alert("Ви програли з рахунком: " + playerWin + ":" + compWin);
} else {
    alert("Нічия " + playerWin + ":" + compWin);
}
console.log("Ви виграли: " + playerWin + ":" + compWin);
