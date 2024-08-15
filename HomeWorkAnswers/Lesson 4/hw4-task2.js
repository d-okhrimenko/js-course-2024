function getOperator() {
    let getRandom = Math.floor(Math.random() * 4) + 1
    if (getRandom === 1) {
        return "+"
    }
    else if (getRandom === 2) {
        return "-"
    }
    else if (getRandom === 3) {
        return "*"
    }
    else if (getRandom === 4) {
        return "/"
    }
}


let right = 0
let wrong = 0
let raund = 1
let tryAgain = 3

do {
    let firstNumber = Math.floor(Math.random() * 101)
    let secondNumber = Math.floor(Math.random() * 11)
    let operator = getOperator()
    console.log(firstNumber, secondNumber, operator)
    let sum = `${firstNumber} ${operator} ${secondNumber}`
    console.log(sum)
    let correctAnswer

    switch (operator) {
        case "+":
            correctAnswer = firstNumber + secondNumber
            break;
        case "-":
            correctAnswer = firstNumber - secondNumber
            break;
        case "*":
            correctAnswer = firstNumber * secondNumber
            break;
        case "/":
            correctAnswer = firstNumber / secondNumber
            break;
    }

    let userAnswer = Number(prompt("Раунд №" + raund + ". Надайте Вашу відповідь " + sum + ". У вас залишилось " + tryAgain + " спроб."))
    raund++
    if (userAnswer === correctAnswer) {
        alert("Вітаю! Ви вгадали правильно.")
        right++
    }
    else {
        alert("Ваша відповідь неправильна. Правильна відповідь " + correctAnswer)
        wrong++
        tryAgain--
    }
} while (raund <= 10 && tryAgain > 0)

alert(`Гра закінчена. Результат гри: кількість правильних відповідей ${right}, кількість неправильних відповідей ${wrong}`)



