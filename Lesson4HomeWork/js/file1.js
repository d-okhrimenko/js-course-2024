function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let userChoice = 0;
    let computerChoice = 0;
    let rounds = 0;
    let choices = ["камінь", "ножиці", "папір"];
    document.querySelector("#user").textContent = userScore;
    document.querySelector("#computer").textContent = computerScore;

    for (let i = 0; i < 3; i++) {
        userChoice = prompt("Введіть вашу відповідь (камінь, ножиці, папір)");
        computerChoice = choices[Math.floor(Math.random() * 3)];
        if (userChoice === computerChoice) {
            alert("Нічия");
        } else if (
            (userChoice === "камінь" && computerChoice === "ножиці") ||
            (userChoice === "ножиці" && computerChoice === "папір") ||
            (userChoice === "папір" && computerChoice === "камінь")
        ) {
            alert("Ви перемогли");
            userScore++;
            document.querySelector("#user").textContent = userScore;
        } else {
            alert("Ви програли");
            computerScore++;
            document.querySelector("#computer").textContent = computerScore;
        }
        rounds++;
        document.querySelector("#result").textContent =
            userScore + " - " + computerScore;
        console.log(userScore, computerScore);
    }
}

document.querySelector(".btn").addEventListener("click", () => {
    playGame();
});
