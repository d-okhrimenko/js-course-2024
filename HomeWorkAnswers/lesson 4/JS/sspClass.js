/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// sspClass.js
// реалізація гри "камінь ножиці папір" через кляс "StoneScissorsPaperGame"
// реалізовано механізм нескінченної гри до введення гравцем команди "вихід".
// також реалізовано метод онулення лічильників рахунків гравців і кількості зіграних раундів
//
// поля клясу:
//   options - масив рядкових значень-команд, доступних для гри
//   optionsLength - довжина масиву без елементу команди "вихід"
//   optionsString - представлення значень гравцю, доступних у гри
//   playerMsgs - масив повідомлень гравцю в грі
//   this.rounds - кількість раундів гри
//   playerScore - рахунок гравця
//   computerScore - рахунок комп'ютера
//
// методи клясу:
//   getOptionsString() - метод формує і повертає представлення доступних значень гри
//   getPlayerChoice() - метод отримання вводу гравця
//   getComputerChoice() - метод генерації одного з трьох варіянтів можливих значень гри
//   choseValediction() - метод обраання формального прощання з гравцем
//   play() - основний метод клясу гри
//   refresh() - метод онулення лічильників об'єкту гри 
//
class StoneScissorsPaperGame {
    constructor() {
      this.options = ["камінь", "ножиці", "папір", "вихід"];
      this.optionsLength = this.options.length - 1;
      this.optionsString = this.getOptionsString();
  
      this.playerMsgs = ["Ви виграли!", "Ви програли!", "Нічия.", "Дякую за гру!", "Шкода, що не зіграли...", "Шкода, що так швидко йдете..."];
  
      this.rounds = 0;
      this.playerScore = 0;
      this.computerScore = 0;
    } //  constructor()
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Робота з введеним вибором гравцем та згенерованого комп'єтером
  
    // обробка вибору гравця
    getPlayerChoice() {
      let playerChoice = "";
      while (true) {
        playerChoice = prompt(this.optionsString).toLowerCase();
  
        if (playerChoice != null && this.options.includes(playerChoice))
          return playerChoice;
      }
    } // getPlayerChoice()
  
    // симуляція вибору від комп'ютера
    getComputerChoice() {
      return this.options[Math.floor(Math.random() * this.optionsLength)];
    } // getComputerChoice()
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Допоміжні функції клясу
  
    // формуємо рядок для демонстрації гравцю
    getOptionsString() {
      let gameOptionsString = "";
  
      for (let i = 0; i < this.optionsLength; i++) {
        gameOptionsString += this.options[i];
        if (i == this.optionsLength - 1) 
          return gameOptionsString += "?";
        gameOptionsString += ", ";
      }
    } // getOptionsString()
  
    // формуємо інформацію для гравця про стан раунду гри.
    formPlayerMsg(inMsg, symb = "|", playerChoice = "", computerChoice = "") {
      return (
        `${inMsg}` +
        ((playerChoice == "") ? "" : `\n(гравець) ${playerChoice} ${symb} ${computerChoice} (комп'ютер)`) +
        "\nРахунок:" +
        "\n(гравець) " +
        this.playerScore +
        " : " +
        this.computerScore +
        " (комп'ютер)"
      );
    } // formPlayerMsg()
  
    // вибираємо формальне прощання, при виході гравця з гри
    choseValediction() {
      if(this.computerScore == 0 && this.computerScore == this.playerScore)
        if(this.rounds == 0) return this.playerMsgs[4];
        else return this.playerMsgs[5];
      else return this.playerMsgs[3];
    } // choseValediction()
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Методи керування грою
  
    // власне сама гра
    play() {
      let playerChoice, computerChoice;
      let msg = "";
  
      while (true) {
        playerChoice = this.getPlayerChoice();
        console.log(playerChoice);
  
        if (playerChoice === this.options[this.optionsLength]) {
          msg = this.formPlayerMsg(this.choseValediction());
          console.log(msg);
          break;
        }
  
        computerChoice = this.getComputerChoice();
        console.log(computerChoice);
  
        if (playerChoice === computerChoice) {
          msg = this.formPlayerMsg(this.playerMsgs[2]);
        } else if (
          (playerChoice === this.options[0] && computerChoice === this.options[1]) ||
          (playerChoice === this.options[1] && computerChoice === this.options[2]) ||
          (playerChoice === this.options[2] && computerChoice === this.options[0])) 
        {
          this.playerScore++;
          msg = this.formPlayerMsg(this.playerMsgs[0], ">", playerChoice, computerChoice);
        } else {
          this.computerScore++;
          msg = this.formPlayerMsg(this.playerMsgs[1], "<", playerChoice, computerChoice);
        }
        this.rounds++;
        alert(msg);
      }
      alert(msg);
    } // playRound()
  
    // обнуляємо лічильники
    refresh() {
      this.rounds = 0;
      this.playerScore = 0;
      this.computerScore = 0;
    } //  refresh()
  } // class Game
  