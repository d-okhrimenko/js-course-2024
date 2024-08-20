class Game {
  constructor() {
    this.options = ["камінь", "ножиці", "папір", "вихід"];
    this.optionsLength = this.options.length - 1;
    this.optionsString = this.getOptionsString();
    this.playerWinMsg = "Ви виграли!";
    this.playerLoseMsg = "Ви програли!";
    this.playerDrawMsg = "Нічия.";
    this.playerScore = 0;
    this.computerScore = 0;
  } //  constructor()

  // формуємо рядок для демонстрації користувачу
  getOptionsString() {
    let gameOptionsString = "";

    for (let i = 0; i < this.optionsLength; i++) {
      gameOptionsString += this.options[i];
      if (i == this.optionsLength - 1) return gameOptionsString;
      gameOptionsString += ", ";
    }
  } // getOptionsString()

  /////////////////////////////////////////////////////////////////////////////////
  // Робота з введеним вибором ігрока та згенерованого комп'єтером

  // вибір ігрока
  getPlayerChoice() {
    let playerChoice = "";
    while (true) {
      playerChoice = prompt(this.optionsString).toLowerCase();

      if (playerChoice != null && this.options.includes(playerChoice))
        return playerChoice;
    }
  }

  // імітація введення вибору комп'ютером
  getComputerChoice() {
    return this.options[Math.floor(Math.random() * this.optionsLength)];
  } // getComputerChoice()

  // формуємо інформацію для ігрока про стан раунду гри.
  formPlayerMsg(inMsg, playerChoice, computerChoice, symb = '|') {
    return  `${inMsg} (ігрок (` + this.playerScore + `): ${playerChoice} ${symb} комп'ютер (` + this.computerScore + `): '${computerChoice} )`;
    //return  `${inMsg} (ігрок: ${playerChoice} ${symb} комп'ютер: ${computerChoice} )`;
  } // formPlayerMsg()

  // раунд гри
  playRound() {
    let playerChoice, computerChoice;
    let msg = "";
    let gameStarted = false;

    while (true) {
      playerChoice = this.getPlayerChoice();
      console.log(playerChoice);

      if (playerChoice === this.options[this.optionsLength]) {
        msg = "Дякую за гру!\nРахунок:\n" + this.playerScore + " (ігрок) : " + this.computerScore + " (комп'ютер)";
        console.log(msg);
        break;
      }
    
      computerChoice = this.getComputerChoice();
      console.log(computerChoice);

      if (playerChoice === computerChoice) {
        msg = this.formPlayerMsg(this.playerDrawMsg, playerChoice, computerChoice);
      } else if (
        (playerChoice === this.options[0] && computerChoice === this.options[1]) ||
        (playerChoice === this.options[1] && computerChoice === this.options[2]) ||
        (playerChoice === this.options[2] && computerChoice === this.options[0])
      ) {
        this.playerScore++;
        msg = this.formPlayerMsg(this.playerWinMsg, playerChoice, computerChoice, '>');
      } else {
        this.computerScore++;
        msg = this.formPlayerMsg(this.playerLoseMsg, playerChoice, computerChoice, '<');
      }
      alert(msg);
    }
    alert(msg);
  } // playRound()
} // class Game

let gameObject = new Game();
gameObject.playRound();
