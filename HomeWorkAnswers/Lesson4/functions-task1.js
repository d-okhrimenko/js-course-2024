let gameEnabled = false;

let counter = 0;
let countPersonWin = 0;
let countComputerWin = 0;
let countErrors = 0;
let countTies = 0;

let currentWinner = 0;
const playerUser = 1;
const playerComp = 2;
const tie = 0;
const error = -1;

let msgWinner = "";

const rock = 0;
const scissors = 1;
const paper = 2;

function startPlayRound() {
    gameEnabled = true;
    
    while (gameEnabled) {
        let playerPCChoice = makePCChoice(2);
        let playerPersonChoice = prompt("Type your choice: 0 - rock, 1 - scissors, 2 - paper. Type stop for exit").trim();
    
        determineWinner(playerPersonChoice, playerPCChoice);
        alert(msgWinner);
    }
}

function updateResults() {
    let output = document.querySelector("#counter");
    output.innerHTML = `Total rounds: ${counter}`;
    
    output = document.querySelector("#countTies");
    output.innerHTML = `Number of ties: ${countTies}`;

    output = document.querySelector("#countPersonWin");
    output.innerHTML = `You won: ${countPersonWin}`;

    output = document.querySelector("#countComputerWin");
    output.innerHTML = `The computer won: ${countComputerWin}`;

    output = document.querySelector("#countErrors");
    output.innerHTML = `Invalid commands: ${countErrors}`;

    counter = 0;
    countTies = 0;
    countPersonWin = 0;
    countComputerWin = 0;
    countErrors = 0;
}

function determineWinner(playerPersonChoice, playerPCChoice) {
    if(playerPersonChoice === "stop") {
        gameEnabled = false;
        msgWinner = "Game is stopped!";
        updateResults();
        return;
    }

    counter++;

    playerPersonChoice = processChoice(playerPersonChoice.trim());
    if (playerPersonChoice === error) {
        msgWinner = "Ooops... unknown command";
        countErrors++;
        return;
    }
    if (playerPersonChoice === playerPCChoice){
        msgWinner = "It's a tie!";
        currentWinner = tie;
        countTies++;
        return;
    }

    if (playerPersonChoice === rock) {
        if (playerPCChoice === scissors) {
            msgWinner = "You win!! Rock beats Scissors.";
            currentWinner = playerUser;
        } else if (playerPCChoice === paper) {
            msgWinner =  "Computer wins!! Paper beats Rock.";
            currentWinner = playerComp;
        }
    } else if (playerPersonChoice === scissors) {
        if (playerPCChoice === paper) {
            msgWinner =  "You win!! Scissors beats Paper.";
            currentWinner = playerUser;
        } else if (playerPCChoice === rock) {
            msgWinner =  "Computer wins!! Rock beats Scissors.";
            currentWinner = playerComp;
        }
    } else if (playerPersonChoice === paper) {
        if (playerPCChoice === rock) {
            msgWinner =  "You win!! Paper beats Rock.";
            currentWinner = playerUser;
        } else if (playerPCChoice === scissors) {
            msgWinner =  "Computer wins!! Scissors beats Paper.";
            currentWinner = playerComp;
        }
    }

    if (currentWinner == playerUser) {
        countPersonWin++;
    } else if (currentWinner == playerComp) {
        countComputerWin++;
    }
}

function makePCChoice(max) {
    return Math.floor(Math.random() * (max + 1));
}

function processChoice(value) {
    switch(value) {
        case "0":
            return rock;
        case "1":
            return scissors; 
        case "2":
            return paper;
        default:
            return error;
    }
}
