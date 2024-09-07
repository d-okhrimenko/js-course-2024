const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const error = document.querySelector('#error');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const gameStatus = document.querySelector('#status');

let errorMessage ;
let randomValue = ' ';
let playerScore = 0;
let computerScore = 0;
const attempt = 3;
let attemptCount = 0;


button.addEventListener('click', startGame);
    
function startGame () {

    const playerValue = getPlayerValue();
    if(errorMessage === ' ') {
        const randomValue = getRandomValue();
        if(playerValue === 'камінь' && randomValue === 'ножиці' || playerValue ===  'ножиці' && randomValue === 'папір' || playerValue === 'папір' &&    randomValue === 'камінь') {
            playerScore = increaseScore(playerScore);
            continueGame(playerScore, computerScore);
        } else if (playerValue === randomValue){
            continueGame(playerScore, computerScore);
        } else {
            computerScore = increaseScore(computerScore);
            continueGame(playerScore, computerScore);
        }

        attemptCount++;
       
        if(attemptCount === attempt) {
            button.removeEventListener('click', startGame);
            gameStatus.innerHTML = 'Гру завершено!';
            gameStatus.classList.add('status');
            if(playerScore > computerScore) {
                result.innerHTML = 'Ви перемогли!'
            } else if (playerScore < computerScore) {
                result.innerHTML = 'Ви програли!';
            } else {
                result.innerHTML = 'Нічия!';
            }
        } 
    } 
}

function getPlayerValue() {
    errorMessage = ' ';
    error.innerHTML = errorMessage; 

    let initialValue = playerChoice.value;
    let newPlayerChoice = initialValue.replace(/\s+/g, "").toLowerCase();
    let isValid = newPlayerChoice === 'камінь' || newPlayerChoice ==='ножиці' || newPlayerChoice === 'папір';
    if(isValid) {
        return newPlayerChoice;
    } else {
    errorMessage = "Введіть камінь, ножиці або папір";  
    error.innerHTML = errorMessage;  
    }  
}

function getRandomValue() {
    randomValue = Math.floor(Math.random() * 3) + 1;
    if (randomValue === 1) {
       return computerChoice.innerHTML = 'камінь';
    } else if (randomValue === 2){
        return computerChoice.innerHTML = 'ножиці';
    } else  {
        return computerChoice.innerHTML = 'папір';
    }
}

function increaseScore (scoreValue) {
    return scoreValue + 1;
}

function continueGame (playerScore, computerScore) {
    gameStatus.innerHTML = 'Гра триває!';
    score.innerHTML = `Рахунок ${playerScore} : ${computerScore}`;
}

