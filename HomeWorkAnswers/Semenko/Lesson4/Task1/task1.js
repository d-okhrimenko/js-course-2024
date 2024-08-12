let computerName = "Микрик";
let playerWinCounter = 0;
let computerWinCounter = 0;
let totalCounter = 0;
let Variants = ["камень", "ножницы", "бумага"];
let min = 0;
let max = Variants.length - 1;


document.querySelector("#hellocomp").innerHTML =
  "Привет, давай знакомиться! Меня зовут " + computerName + "!";
document.querySelector("#helloplayer").innerHTML = "Как тебя зовут?";
document.addEventListener("keypress", getPlayerName);

function getPlayerName(e) {
  if (e.which === 13) {
    e.preventDefault();
    let playerName = document.querySelector("input").value;
    console.log(playerName);
    document.querySelector("#playeranswer").innerHTML =
      "Рад познакомиться, " +
      playerName +
      ". Давай сыграем в камень, ножницы, бумагу.";
    document.querySelector("#rules").innerHTML =
      "Правила простые: ножницы бьют бумагу, бумага бьет камень, камень бьет ножницы. Если предметы совпали - ничья.";
    document.querySelector("#start").innerHTML = "Жми скорее - 'Начать раунд'!";
    document.querySelector("button").style = "display:block";
  }
}

function getCounters() {
  totalCounter++;
  document.querySelector("#playerwincount").innerHTML =
    "Количество побед - игрок: " + playerWinCounter;
  document.querySelector("#computerwincount").innerHTML =
    "Количество побед - компьютер: " + computerWinCounter;
  document.querySelector("#totalcount").innerHTML =
    "Количество сыгранных раундов: " + totalCounter;
}

function getComputerChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector("#play").onclick = function () {
  let substitution = document.querySelector("#result").innerHTML;
  let playerChoice = +prompt(
    "Введите свой выбор(0-камень, 1-ножницы, 2-бумага)"
  );
  if ((playerChoice >= 0) & (playerChoice <= 2)) {
    switch (playerChoice) {
      case 0:
        document.querySelector("#playerchoice").innerHTML = "Ты выбрал камень!";
        break;
      case 1:
        document.querySelector("#playerchoice").innerHTML =
          "Ты выбрал ножницы!";
        break;
      case 2:
        document.querySelector("#playerchoice").innerHTML = "Ты выбрал бумагу!";
        break;
    }
    let computerChoice = getComputerChoice(min, max);
    switch (computerChoice) {
      case 0:
        document.querySelector("#computerchoice").innerHTML =
          "Я выбрал камень!";
        break;
      case 1:
        document.querySelector("#computerchoice").innerHTML =
          "Я выбрал ножницы!";
        break;
      case 2:
        document.querySelector("#computerchoice").innerHTML =
          "Я выбрал бумагу!";
        break;
    }

    if ((playerChoice == 0) & (computerChoice == 1)) {
      substitution = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if ((playerChoice == 1) & (computerChoice == 2)) {
      substitution = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if ((playerChoice == 2) & (computerChoice == 0)) {
      substitution = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if (playerChoice == computerChoice) {
      substitution = "Ничья!";
      getCounters();
    } else {
      substitution = "Я выиграл!";
      computerWinCounter++;
      getCounters();
    }
  } else {
    alert("Введите корректные данные");
  }
};
