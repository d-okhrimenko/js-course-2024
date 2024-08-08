const STONE = 'камінь';
const SCISSORS = 'ножиці';
const PAPER = 'папір';
const STOP_GAME = 'вихід';
const OPTIONS = [STONE, SCISSORS, PAPER];

let playerScore = 0;
let computerScore = 0;

document.querySelector('#startTripleGame').onclick = function () {
    let roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    while (roundCounter < 3) {
        whoWin(generatePlayerChoice(), generateComputerChoice());
        roundCounter++;
    }
    document.querySelector('#score').innerHTML = `Рахунок: гравець ${playerScore} компютер ${computerScore}`;
}

document.querySelector('#startSingleGame').onclick = function () {
    whoWin(generatePlayerChoice(), generateComputerChoice());
    document.querySelector('#score').innerHTML = `Рахунок: гравець ${playerScore} компютер ${computerScore}`;
}

function generatePlayerChoice() {
    let choice = prompt('Оберіть камінь, ножиці чи папір, камінь', 'камінь');
    return choice;
}

function generateComputerChoice() {
    let optionIndex = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[optionIndex];
}

function whoWin(playerChoice, computerChoice) {
    if (playerChoice === null || playerChoice === STOP_GAME) {
        alert('Гравець вирішив покинути гру');
        return;
    }
    alert(`Компютер вибрав ${computerChoice}. Ви вибрали ${playerChoice}.`);

    if (playerChoice === computerChoice) {
        alert('Нічия!');
    } else if (
        (playerChoice === STONE && computerChoice === PAPER)
        || (playerChoice === SCISSORS && computerChoice === STONE)
        || (playerChoice === PAPER && computerChoice === SCISSORS)
    ) {
        alert('Компютер переміг');
        computerScore += 1;
    } else {
        alert('Гравець переміг');
        playerScore += 1;
    }
}