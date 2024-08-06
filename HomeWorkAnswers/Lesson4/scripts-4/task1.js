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

function showOptionText(element, choice) {
  switch (choice) {
    case "rock":
    case 0:
      element.textContent = "💎";
      break;

    case "paper":
    case 1:
      element.textContent = "📃";
      break;

    case "scissors":
    case 2:
      element.textContent = "✂";
      break;

    default:
      alert("Invalid option, please try again");
      break;
  }
}

function showPcOption() {
  const index = Math.floor(Math.random() * 3);
  showOptionText(optPc, index);
}

function showYourOption(opt) {
  showOptionText(optYour, opt);
}

function showScore() {
  scoreYou.textContent = `${yourScore}`;
  scorePc.textContent = `${pcScore}`;
}

function showOutcome() {
  const pcOption = optPc.textContent;
  const yourOption = optYour.textContent;
  if (
    (yourOption === "💎" && pcOption === "✂") ||
    (yourOption === "✂" && pcOption === "📃") ||
    (yourOption === "📃" && pcOption === "💎")
  ) {
    outcome.textContent = "You won! 🏆";
    yourScore++;
    showScore();
  } else if (yourOption === pcOption) {
    outcome.textContent = "it's a draw.";
    showScore();
  } else {
    outcome.textContent = "You lost... 💩";
    pcScore++;
    showScore();
  }
}

function game() {
  let opt;

  setTimeout(function () {
    opt = prompt("What is your option? You can choose from three valid options: Rock, Paper or Scissors");
    showYourOption(opt);
    showPcOption();
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
