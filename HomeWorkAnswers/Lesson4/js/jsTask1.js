const optionsArray = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function getOption(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function playGame() {
    const userChoice = document.querySelector('input[name="rps-choise"]:checked');
    if (!userChoice) {
        alert('Please select an option');
        return;
    }

    let userSelection = userChoice.value;
    let computerChoice = getOption(optionsArray);
    let result;

    if (userSelection === computerChoice) {
        result = 'Tie! :/\nYou chose: ' + userSelection + '\nComputer chose: ' + computerChoice;
    } else if ((userSelection === 'Rock' && computerChoice === 'Scissors') || (userSelection === 'Paper' && computerChoice === 'Rock') || (userSelection === 'Scissors' && computerChoice === 'Paper')) {
        result = 'Win! :)\nYou chose: ' + userSelection + '\nComputer chose: ' + computerChoice;
        playerScore++;
    } else {
        result = 'Lose :(\nPlayer chose: ' + userSelection + '\nComputer chose: ' + computerChoice;
        computerScore++;
    }

    alert(result);
    updateScore();
}

function updateScore() {
    document.getElementById('scoreOutput').innerText = `${playerScore} : ${computerScore}`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}