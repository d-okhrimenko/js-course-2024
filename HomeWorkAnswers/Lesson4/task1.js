document.querySelector("#btnTask1").addEventListener("click", rps)

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function rps(playerUser, playerComp) {
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        playerUser = prompt(`Enter your choice like "r", "p", "s" or enter “ex” to exit`)
        playerComp = getComputerChoice();

        if (playerUser == "r") {
            if (playerComp == "r") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nIt is a tie, no one wins.`);
                ties++;
            } else if (playerComp == "p") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nPaper beats rock. Computer has won.`);
                computerWins++;
            } else if (playerComp == "s") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nRock beats scissors. User has won.`);
                userWins++;
            }
        } else if (playerUser == "p") {
            if (playerComp == "r") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nPaper beats rock. User has won.`);
                userWins++;
            } else if (playerComp == "p") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nIt is a tie, no one wins.`)
                ties++;
            } else if (playerComp == "s") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nScissors beats paper. Computer has won.`);
                computerWins++;
            }
        } else if (playerUser == "s") {
            if (playerComp == "r") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nRock beats scissors. Computer has won.`);
                computerWins++;
            } else if (playerComp == "p") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nScissors beats paper. User has won.`);
                userWins++;
            } else if (playerComp == "s") {
                alert(`User: ${playerUser} Computer: ${playerComp}.\nIt is a tie, no one wins.`);
                ties++;
            }
        } else if (playerUser == "ex") {
           return alert("User quit the game!");
        } else if (userWins == 3) {
            return alert(`Game Over! User has won!\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
        } else if (computerWins == 3) {
            return alert(`Game Over! Computer has won!\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
        } else if (ties == 3) {
            return alert(`Game Over! It is a tie, no one wins.\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
        } else {
            alert(`${playerUser} - it is an invalid option. Enter "r", "p", or "s"`);
        }
    }
    if (userWins > computerWins) {
        alert(`Game Over! User has won!\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
    } else if (userWins < computerWins) {
        alert(`Game Over! Computer has won!\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
    } else if (ties > userWins && computerWins) {
        alert(`Game Over! It is a tie, no one wins.\nTotal score:\nUser: ${userWins}\nComputer: ${computerWins}\nTies: ${ties}`);
    }
}
