let userChoice = prompt("Put rock, paper or scissors").toLowerCase();

let choice = ["rock", "paper", "scissors"];
let computerChoice = choice[Math.floor(Math.random() * choice.length)];

let result = "";

if (userChoice === "rock" && computerChoice === "scissors" ||
    userChoice === "scissors" && computerChoice === "paper" ||
    userChoice === "paper" && computerChoice === "rock") {
        result = "Congratulations! You are a winner!"
} else if (userChoice === computerChoice) {
    result = "It's draw!"
} else {
    result = "This time you lost. But don't worry! Try once again! Never give up!"
}

alert(`Your choice: ${userChoice}.\nComputer's choice: ${computerChoice}.\n${result}`);
