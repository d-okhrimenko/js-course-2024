const GAME_OPTIONS = {
  ROCK: 'камінь',
  PAPER: 'папір',
  SCISSORS: 'ножиці',
  EXIT: 'вихід',
};

const GAME_RESULTS = {
  WINNER: 'Ви перемогли!',
  LOSER: "Комп'ютер переміг!",
  DRAW: 'Нічия',
};

const getUserChoice = () => {
  const { ROCK, SCISSORS, PAPER, EXIT } = GAME_OPTIONS;
  const message = `Будь ласка, введіть: "${ROCK}/${SCISSORS}/${PAPER}", щоб зіграти.\nВведіть: "${EXIT}" або натисніть "Скасувати" для завершення гри!`;

  let choice = prompt(`Зробіть свій вибір!\n${message}`)?.toLowerCase();

  while (choice !== ROCK && choice !== SCISSORS && choice !== PAPER && choice !== EXIT) {
    // Обробка випадку, коли користувач натискає "Скасувати"
    if (!choice && choice !== '') {
      return EXIT;
    }

    choice = prompt(`Неправильний вибір.\n${message}`)?.toLowerCase();
  }

  return choice;
};

const getComputerChoice = () => {
  const { ROCK, SCISSORS, PAPER } = GAME_OPTIONS;
  const choices = [ROCK, SCISSORS, PAPER];
  const randomIndex = Math.floor(Math.random() * choices.length);

  console.log('PcChoise:', choices[randomIndex]);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  const { WINNER, LOSER, DRAW } = GAME_RESULTS;
  const { ROCK, SCISSORS, PAPER } = GAME_OPTIONS;

  if (userChoice === computerChoice) {
    return DRAW;
  }
  if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === SCISSORS && computerChoice === PAPER) ||
    (userChoice === PAPER && computerChoice === ROCK)
  ) {
    return WINNER;
  } else {
    return LOSER;
  }
};

const playGame = () => {
  const { EXIT } = GAME_OPTIONS;
  const { WINNER, LOSER } = GAME_RESULTS;
  let userScore = 0;
  let computerScore = 0;
  let rounds = 0;

  while (true) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    if (userChoice === EXIT) {
      alert(
        `Гра завершена.\nЗагальний рахунок:\nВи - ${userScore}\nКомп'ютер - ${computerScore}\nНічия - ${
          rounds - (userScore + computerScore)
        }`
      );
      break;
    }

    const result = determineWinner(userChoice, computerChoice);

    if (result === WINNER) {
      userScore++;
    } else if (result === LOSER) {
      computerScore++;
    }

    rounds++;
    alert(
      `Раунд ${rounds}:\nВаш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}\nЗагальний рахунок: Ви - ${userScore}, Комп'ютер - ${computerScore}, Нічия - ${
        rounds - (userScore + computerScore)
      }`
    );
  }
};

playGame();
