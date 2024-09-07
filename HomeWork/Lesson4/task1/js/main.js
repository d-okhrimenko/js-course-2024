let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultMessage = document.getElementById('resultMessage');

document.getElementById('rock').addEventListener('click', () => playRound('Камінь'));
document.getElementById('scissors').addEventListener('click', () => playRound('Ножиці'));
document.getElementById('paper').addEventListener('click', () => playRound('Папір'));
document.getElementById('exitButton').addEventListener('click', () => exitGame());

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === 'user') {
        userScore++;
        resultMessage.textContent = `Ви виграли! Ви вибрали ${userChoice}, комп'ютер вибрав ${computerChoice}.`;
    } else if (result === 'computer') {
        computerScore++;
        resultMessage.textContent = `Ви програли! Ви вибрали ${userChoice}, комп'ютер вибрав ${computerChoice}.`;
    } else {
        resultMessage.textContent = `Нічия! Ви обидва вибрали ${userChoice}.`;
    }

    updateScores();
}

function getComputerChoice() {
    const choices = ['Камінь', 'Ножиці', 'Папір'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
        (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
        (userChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScores() {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

function exitGame() {
    if (confirm('Ви впевнені, що хочете вийти з гри?')) {
        window.close(); // Закривает окно, если это возможно
    }
}