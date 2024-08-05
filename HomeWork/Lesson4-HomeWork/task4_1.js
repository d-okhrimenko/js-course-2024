let playerChoice;
let computerChoice;

getPlayerChoice();

function getPlayerChoice() {
    while (true) {
        let value = (prompt('Зробіть вибір'));
        if (value == 'камінь' || value == 'ножиці' || value == 'папір') {
            playerChoice = value;
            // console.log(playerChoice);
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
    // console.log(computerChoice);
    alert("Вибір комп'ютера: " + computerChoice);
    gamePlay(playerChoice, computerChoice);
}

function gamePlay() {
    if (playerChoice === computerChoice) {
        alert('Нічия');
    } else if (playerChoice === 'камінь' && computerChoice === 'ножиці' ||
        playerChoice === 'ножиці' && computerChoice === 'папір' ||
        playerChoice === 'папір' && computerChoice === 'камінь') {
        alert('Ви виграли');
    } else {
        alert('Ви програли');
    }
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
