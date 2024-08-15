

const stone = 1
const scissors = 2
const paper = 3

while (true) {
    let userChoice = Number(prompt("Введіть цифру: камінь(1), ножиці(2) або папір(3)"))
    let compChoice = Math.floor(Math.random() * 3) + 1
    let inValid = isNaN(userChoice) && userChoice < 1 && userChoice > 3 && userChoice == "" && userChoice == null
    // console.log(userChoice)
    // console.log(compChoice)
    if (inValid == true) {
        alert("Вводити треба 1,2 або 3. Cпробуйте ще.");
        continue
    }

    if (userChoice === compChoice) {
        alert("Вітаю! Ви зробили однаковий вибір. Нічия.")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (userChoice === stone && compChoice === scissors) {
        alert("Вітаю! Камінь б'є ножиці. Ви виграли!")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (userChoice === scissors && compChoice === paper) {
        alert("Вітаю! Ножиці ріжуть папір. Ви виграли!")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (userChoice === paper && compChoice === stone) {
        alert("Вітаю! Папір накриває камінь. Ви виграли!")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (compChoice === stone && userChoice === scissors) {
        alert("На жаль, ви програли. Камінь б'є ножиці.")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (compChoice === scissors && userChoice === paper) {
        alert("На жаль, ви програли. Ножиці ріжуть папір.")
        console.log(userChoice)
        console.log(compChoice)

    }
    else if (compChoice === paper && userChoice === stone) {
        alert("На жаль, ви програли. Папір накриває камінь.")
        console.log(userChoice)
        console.log(compChoice)

    }
}
