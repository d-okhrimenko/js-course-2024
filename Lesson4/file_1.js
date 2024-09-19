console.log("index_1.html")

let arrName = [null, "Камінь", "Ножиці", "Бумага"]
let counter_games = 0
let counter_draws = 0
let counter_victories = 0
let counter_losses = 0

while(true) {
  let userValue = prompt("Ваш вибір: 1-камінь, 2-ножиці, 3-бумага, 0 - вихід з гри.")
  let compValue = Math.floor(Math.random() * (3 - 1)) + 1


  if(userValue !== null && userValue.trim() !== '' && !isNaN(userValue) && +(userValue) >= 0 && +(userValue) <= 3) {
    userValue = +userValue

    if (userValue == 0) {
      result_games()
      break
    }

    if(userValue == compValue) {
      result_part("нічія")
      counter_games += 1
      counter_draws += 1

    } else if (userValue == 1 && compValue == 2
            || userValue == 2 && compValue == 3
            || userValue == 3 && compValue == 1) {
      result_part("Ви ПЕРЕМОГЛИ!!!")
      counter_games += 1
      counter_victories += 1

    } else {
      result_part("Ви ПРОГРАЛИ :(")
      counter_games += 1
      counter_losses += 1
    }
    
  } else {
    alert("Введіть коректне число!")
  }

  function result_part(text) {
    alert("У вас " + arrName[(userValue)] + ", у компьютера " + arrName[compValue] + ". Результат: " + text)
  }

  function result_games() {
    alert(`EXIT Ви зіграли ${counter_games} разів. ПЕРЕМОГ: ${counter_victories}, ПОРАЗОК: ${counter_losses}, НІЧІЯ: ${counter_draws}.`)
  }
}
