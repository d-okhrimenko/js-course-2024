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

  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector("#play").onclick = function () {
  let substitution = document.querySelector("#result");
  let substitution1 = document.querySelector("#playerchoice");
  let substitution2 = document.querySelector("#computerchoice");
  let playerChoice = +prompt(
    "Введите свой выбор(0-камень, 1-ножницы, 2-бумага)"
  );
  if ((playerChoice >= 0) & (playerChoice <= 2)) {
    switch (playerChoice) {
      case 0:
        substitution1.innerHTML = "Ты выбрал камень!";
        break;
      case 1:
        substitution1.innerHTML =
          "Ты выбрал ножницы!";
        break;
      case 2:
        substitution1.innerHTML = "Ты выбрал бумагу!";
        break;
    }
    let computerChoice = getComputerChoice(min, max);
    switch (computerChoice) {
      case 0:
        substitution2.innerHTML =
          "Я выбрал камень!";
        break;
      case 1:
        substitution2.innerHTML =
          "Я выбрал ножницы!";
        break;
      case 2:
        substitution2.innerHTML =
          "Я выбрал бумагу!";
        break;
    }

    if ((playerChoice == 0) & (computerChoice == 1)) {
      substitution.innerHTML = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if ((playerChoice == 1) & (computerChoice == 2)) {
      substitution.innerHTML = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if ((playerChoice == 2) & (computerChoice == 0)) {
      substitution.innerHTML = "Ты выиграл!";
      playerWinCounter++;
      getCounters();
    } else if (playerChoice == computerChoice) {
      substitution.innerHTML = "Ничья!";
      getCounters();
    } else {
      substitution.innerHTML = "Я выиграл!";
      computerWinCounter++;
      getCounters();
    }
  } else {
    alert("Введите корректные данные");
  }
};
