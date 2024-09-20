function startGame() {

    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Введіть: камінь, ножиці, папір або вихід");
        let compChoice = ["камінь", "ножиці", "папір"];
        let randomIndex = Math.floor(Math.random() * compChoice.length);

        console.log(randomIndex);
        console.log(compChoice[randomIndex]);

        if (
            (userChoice === "камінь" && compChoice[randomIndex] === "ножиці") ||
            (userChoice === "ножиці" && compChoice[randomIndex] === "папір") ||
            (userChoice === "папір" && compChoice[randomIndex] === "камінь")) {
            alert("Ви вибрали " + userChoice);
            alert("Комп'ютер вибрав " + compChoice[randomIndex]);
            alert("ВИ ПЕРЕМОГЛИ!");
            userScore++;
            alert("User score =" + userScore + " Computer score =" + compScore);

        } else if (userChoice === compChoice[randomIndex]) {
            alert("Ви вибрали " + userChoice);
            alert("Комп'ютер вибрав " + compChoice[randomIndex]);
            alert("НІЧИЯ! Перемогла дружба!");

        } else if (
            (compChoice === "камінь" && userChoice[randomIndex] === "ножиці") ||
            (compChoice === "ножиці" && userChoice[randomIndex] === "папір") ||
            (compChoice === "папір" && userChoice[randomIndex] === "камінь")) {
            alert("Ви вибрали " + userChoice);
            alert("Комп'ютер вибрав " + compChoice[randomIndex]);
            alert("ВИ ПРОГРАЛИ!");
            compScore++;
            alert("Computer score =" + compScore + " User score =" + userScore);
        } else if (userChoice === "вихід") {
            alert("Кінець гри. Ви вибрали вийти із гри");
            break;
        }
    }
}

let userScore = 0;
let compScore = 0;

startGame();

if (userScore > compScore) {
    alert("Кінець гри. Ви перемогли з рахунком " + userScore + "-" + compScore);
} else if (userScore < compScore) {
    alert("Кінець гри. Ви програли з рахунком " + userScore + "-" + compScore);
}