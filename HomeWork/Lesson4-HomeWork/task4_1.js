let playerChoice;
let computerChoice;
let counterWinPlayer = 0;
let counterWinComputer = 0;

getPlayerChoice();

function getPlayerChoice() {
    while (true) {
        let value = (prompt('Зробіть вибір'));
        if (value == 'камінь' || value == 'ножиці' || value == 'папір') {
            playerChoice = value;
            alert("Ваш вибір: " + playerChoice);
            getComputerChoice();
            break;
        } else if (value == 'вихід' || value == '' || value == null) {
            gameOut();
            break;
        } else {
            alert('Неправильне введення, повторіть спробу');
        }
    }
}

function getComputerChoice() {
    let value = ['камінь', 'ножиці', 'папір'];
    let randomIndex = Math.floor(Math.random() * 3);
    computerChoice = value[randomIndex];
    alert("Вибір комп'ютера: " + computerChoice);
    gamePlay(playerChoice, computerChoice);
}

function gamePlay() {
    if (playerChoice === computerChoice) {
        alert('Нічия');
    } else if (playerChoice === 'камінь' && computerChoice === 'ножиці' ||
        playerChoice === 'ножиці' && computerChoice === 'папір' ||
        playerChoice === 'папір' && computerChoice === 'камінь') {
        counterWinPlayer++;
        alert('Ви виграли');
    } else {
        counterWinComputer++;
        alert('Ви програли');
    }
    alert('Рахунок ' + '\n' + 'Гравець ' + counterWinPlayer + '\n' + "комп'ютер " + counterWinComputer);
    isContinue();
}

function isContinue() {
    let value = (prompt('Бажаєте продовжити'));
    if (value === 'так') {
        getPlayerChoice();
    } else {
        gameOut();
    }
}

function gameOut() {
    alert('Гру закінчено')
}
