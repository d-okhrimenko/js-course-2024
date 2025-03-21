let userScore = 0;
let computerScore = 0;
let drawScore = 0;

for (let i = 0; i < 3; i++) { // game has 3 rounds

    function getValue(message) {
        while (true) {
            let value = prompt(message).trim();
            let isValid = (value !== "" && value !== null) && (value.toLowerCase() == "rock" || value.toLowerCase() == "paper" || value.toLowerCase() == "scissors" || value.toLowerCase() == "exit");
            console.log(value);
            if (isValid) {
                return value.toLowerCase();
            } else if (value == "") {
                alert("Empty value is not allowed");
            }
        }
    }

    let userChoice = getValue(`Enter "Rock", "Paper" or "Scissors".\nEnter "Exit" to quit the game.`);
    console.log(userChoice);

    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber <= 66) {
        computerChoice = "paper";
    } else if (randomNumber <= 99) {
        computerChoice = "scissors";
    }


    function getResult(a, b) {
        if (a === b) {
            return 'draw';
        }

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper',
            exit: 'exit'
        };

        return winConditions[a] === b ? 'user' : winConditions[a] === 'exit' ? 'exit' : 'computer';
    }

    let res = getResult(userChoice, computerChoice);


    if (res == 'computer') {
        computerScore += 1;
        alert(`User says "${userChoice}". Computer says "${computerChoice}". Result: Computer wins!`);
    } else if (res == 'user') {
        userScore += 1;
        alert(`User says "${userChoice}". Computer says "${computerChoice}". Result: User wins!`);
    } else if (res == 'draw') {
        drawScore += 1;
        alert(`User says "${userChoice}". Computer says "${computerChoice}". Result: it's a draw`);
    }

    if (userChoice != 'exit') {
        alert(`User score: ${userScore} \nComputer score: ${computerScore} \nDraw: ${drawScore}`);
    } else { i = 3 }

    if (i >= 2) {
        alert("Game Over! \nTo re-start press F5 button.");
    }
}