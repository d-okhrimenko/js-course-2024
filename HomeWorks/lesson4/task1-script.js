let userScore = 0;
let computerScore = 0;
let roundCount = 0;

function playGame(userChoice) {
    const choices = ['камінь', 'ножиці', 'папір'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Нічия!';
    } else if ((userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')) {
        result = 'Ви виграли!';
        userScore++;
    } else {
        result = 'Комп\'ютер виграв!';
        computerScore++;
    }

    roundCount++;
    document.getElementById('message').innerText = `Ваш вибір: ${userChoice}, вибір комп'ютера: ${computerChoice}. ${result}`;
    document.getElementById('score').innerText = `Рахунок - Користувач: ${userScore}, Комп'ютер: ${computerScore}. Раундів зіграно: ${roundCount}`;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById('message').innerText = 'Зробіть свій вибір:';
    document.getElementById('score').innerText = '';
}