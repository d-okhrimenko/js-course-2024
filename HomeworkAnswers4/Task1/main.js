let rounds = +prompt("Input count of rounds");
let playerPoints = 0;
let machinePoints = 0;


for (i = 0; i < rounds; i++) {
    let playerChoise = prompt("Input your choise: stone, scissors or paper");

    if (playerChoise == "exit") {
        break
    }

    let randomChoise = Math.floor(Math.random() * 3 + 1);
    let machineChoise = "";
    switch (randomChoise) {
        case 1:
            machineChoise = "stone"
            break;
        case 2:
            machineChoise = "scissors"
            break;
        case 3:
            machineChoise = "paper"
            break;
    }

    if (machineChoise == playerChoise) {
        alert(`The result of the round is a draw. Your choise is ${playerChoise} and computer choise is ${machineChoise}`)
    } else if (
        machineChoise == "stone" && playerChoise == "scissors" ||
        machineChoise == "scissors" && playerChoise == "paper" ||
        machineChoise == "paper" && playerChoise == "stone") {
        alert(`The result of the round - the winner is the COMPUTER. Your choise is ${playerChoise} and computer choise is ${machineChoise}`);
        machinePoints++
    } else if (
        machineChoise == "scissors" && playerChoise == "stone" ||
        machineChoise == "paper" && playerChoise == "scissors" ||
        machineChoise == "stone" && playerChoise == "paper") {
        alert(`The result of the round - the winner is the PLAYER. Your choise is ${playerChoise} and computer choise is ${machineChoise}`)
        playerPoints++
    }

    if (i == rounds - 1) {
        if (machinePoints > playerPoints) {
            alert (`The winner of the game is COMPUTER. Game score is C-${machinePoints} : P-${playerPoints}`);
        } else if (machinePoints < playerPoints) {
            alert (`The winner of the game is PLAYER. Game score is P-${playerPoints} : C-${machinePoints}`);
        } else {
            alert (`The result of the game is a DRAW. Game score is P-${playerPoints} : C-${machinePoints}`);
        }
    }
}

