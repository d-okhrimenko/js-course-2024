console.log("index_1_button.html")

const button = document.querySelector("#btn")
const changeBlock = document.querySelector("#changeBlock")
let textAnswers = document.querySelector("#textAnswers")

let arrName = [null, "Камінь", "Ножиці", "Бумага"]
let counter_games = 0
let counter_draws = 0
let counter_victories = 0
let counter_losses = 0

async function runGame() {
while(true) {

  await waitForButtonClick();
  
  let userValue = document.querySelector("#input").value
  let compValue = Math.floor(Math.random() * 3) + 1

  if(userValue !== null && userValue.trim() !== '' && !isNaN(userValue) && +(userValue) >= 0 && +(userValue) <= 3) {
    userValue = +userValue

    if (userValue == 0) {
      result_games()
      break
    }

    if(userValue == compValue) {
      result_part("нічія", userValue, compValue)
      counter_games += 1
      counter_draws += 1

    } else if (userValue == 1 && compValue == 2
            || userValue == 2 && compValue == 3
            || userValue == 3 && compValue == 1) {
      result_part("Ви ПЕРЕМОГЛИ!!!", userValue, compValue)
      counter_games += 1
      counter_victories += 1

    } else {
      result_part("Ви ПРОГРАЛИ :(", userValue, compValue)
      counter_games += 1
      counter_losses += 1
    }
    
  } else {
    textAnswers.textContent = "Введіть коректне число!"
  }
}
}

function waitForButtonClick() {
  return new Promise(resolve => {
    button.addEventListener('click', function() {
      resolve();
    }, { once: true});
  });
}

function result_part(text, userValue, compValue) {
  textAnswers.textContent = "У вас " + arrName[(userValue)] + ", у компьютера " + arrName[compValue] + ". Результат: " + text
}

function result_games() {
  let finishGameText = document.createTextNode(`EXIT Ви зіграли ${counter_games} разів. ПЕРЕМОГ: ${counter_victories}, ПОРАЗОК: ${counter_losses}, НІЧІЯ: ${counter_draws}.`);
  changeBlock.parentNode.replaceChild(finishGameText, changeBlock)
}

runGame();