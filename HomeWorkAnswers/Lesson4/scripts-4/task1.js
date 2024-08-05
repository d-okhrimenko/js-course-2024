"use strict";

const btnNew = document.querySelector(".game-new");
const btnCont = document.querySelector(".game-continue");
const btnQuit = document.querySelector(".game-quit");
const optYour = document.getElementById("your");
const optPc = document.getElementById("pc");
const outcome = document.getElementById("outcome");
const scorePc = document.getElementById("score-pc");
const scoreYou = document.getElementById("score-you");
let yourScore = 0;
let pcScore = 0;

function showMyOpt(opt) {
  switch (opt.toLowerCase()) {
    case "rock":
      optYour.textContent = "💎";
      break;
    case "paper":
      optYour.textContent = "📃";
      break;
    case "scissors":
      optYour.textContent = "✂";
      break;

    default:
      alert("Invalid option, please try again");
      break;
  }
}
function showPcOpt() {
  const index = Math.floor(Math.random() * 3);
  switch (index) {
    case 0:
      optPc.textContent = "💎";
      break;
    case 1:
      optPc.textContent = "📃";
      break;
    case 2:
      optPc.textContent = "✂";
      break;
  }
}
function showOutcome() {
  if (optYour.textContent === "💎" && optPc.textContent === "✂") {
    outcome.textContent = "You won! 🏆";
    yourScore++;
    scoreYou.textContent = `${yourScore}`;
  } else if (optYour.textContent === "✂" && optPc.textContent === "📃") {
    outcome.textContent = "You won! 🏆";
    yourScore++;
    scoreYou.textContent = `${yourScore}`;
  } else if (optYour.textContent === "📃" && optPc.textContent === "💎") {
    outcome.textContent = "You won! 🏆";
    yourScore++;
    scoreYou.textContent = `${yourScore}`;
  } else if (optYour.textContent === optPc.textContent) {
    outcome.textContent = "it's a draw.";
    scoreYou.textContent = `${yourScore}`;
    scorePc.textContent = `${pcScore}`;
  } else {
    outcome.textContent = "You lost... 💩";
    pcScore++;
    scorePc.textContent = `${pcScore}`;
  }
}
function game() {
  let opt;
  setTimeout(function () {
    opt = prompt("What is your option? You can choose from three valid options: Rock, Paper or Scissors");
    showMyOpt(opt);
    showPcOpt();
    showOutcome();
  }, 1000);
}

btnNew.addEventListener("click", () => {
  yourScore = pcScore = 0;
  optYour.textContent = optPc.textContent = outcome.textContent = "";
  scorePc.textContent = "0";
  scoreYou.textContent = "0";

  game();
});

btnCont.addEventListener("click", () => {
  game();
});

btnQuit.addEventListener("click", () => {
  yourScore = pcScore = 0;
  optYour.textContent = optPc.textContent = outcome.textContent = "";
  scorePc.textContent = "0";
  scoreYou.textContent = "0";
});
