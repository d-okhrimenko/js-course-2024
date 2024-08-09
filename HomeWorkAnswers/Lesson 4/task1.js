const choices = ["камінь", "ножиці", "папір"];
const exit = "вихід";
let player, ai, randomChoice, round, playerWins, aiWins;

function rockScissorsPaper() {
  round = 1;
  playerWins = 0;
  aiWins = 0;
  
  while (true) {
    alert(`Раунд - ${round}`);

    player = prompt(`Зробіть вибір (${choices.join(", ")}):\nВведіть "${exit}" для завершення гри.`).trim().toLowerCase();

    if (player === exit) {
      alert("Гру завершено...");
      alert(`РАХУНОК:\nВи - ${playerWins} : Противник - ${aiWins}`);
      return;
    }

    if (!choices.includes(player)) {
      alert("Не вірний вибір!");
      continue;
    }

    ai = choices[Math.floor(Math.random() * choices.length)];

    alert(`Ви обрали: ${player}\nПротивник обрав: ${ai}`);

    if (player === ai) {
      alert("Нічия!");
    } else if (choices.indexOf(player) === (choices.indexOf(ai) + 1) % choices.length) {
      aiWins++;
      alert("Ви програли :(");
    } else {
      playerWins++;
      alert("Ви перемогли!");
    }
    alert(`РАХУНОК:\nВи - ${playerWins} : ${aiWins} - Противник`);
    round++;
  }
};