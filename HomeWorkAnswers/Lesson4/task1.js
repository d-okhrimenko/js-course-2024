const game_values = ['rock', 'scissors', 'paper'];
let round = 1;
let computersPoints = 0;
let usersPoints = 0;

while (true) {
  let userChoice = prompt(
    ` 
Round:   ${round}.
Computer's points:  ${computersPoints}.
User's points:  ${usersPoints}.

Choose Rock, Scissors or Paper:`
  ).toLocaleLowerCase();

  if (game_values.includes(userChoice)) {
    random_index = Math.floor(Math.random() * game_values.length);
    check_winner(userChoice);
    round++;
  } else if (userChoice === 'exit' || userChoice === null) {
    break;
  } else {
    alert(`The ${userChoice} value is invalid. Try to enter again.`);
  }
}

function check_winner(choice) {
  let compChoice = game_values[random_index];
  if (compChoice === choice) {
    alert(`${capitalize(compChoice)} = ${capitalize(choice)}. A draw!`);
  } else if (
    (compChoice === 'rock' && choice === 'scissors') ||
    (compChoice === 'scissors' && choice === 'paper') ||
    (compChoice === 'paper' && choice === 'rock')
  ) {
    alert(
      `${capitalize(compChoice)} beat(s) ${capitalize(choice)}. Computer wins!`
    );
    computersPoints++;
  } else {
    alert(
      `${capitalize(compChoice)} lose(s) to ${capitalize(choice)}. User wins!`
    );
    usersPoints++;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
