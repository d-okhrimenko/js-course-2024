let operations = ["+", "-", "*", "/"]
let randomOperation = Math.floor(Math.random() * operations.length)

const firstNumber = Math.floor(Math.random() * 100)
const secondNumber = Math.floor(Math.random() * 100)

let answer = prompt(`${firstNumber}${operations[randomOperation]}${secondNumber}`)
answer = parseInt(answer)


let counterGoodAnswers = 0
let counterBadAnswers = 0
if (randomOperation === 0) {
    if (firstNumber+secondNumber === answer) {
        counterGoodAnswers++
    } else {
        counterBadAnswers++
    }    
} else if (randomOperation === 1) {
    if (firstNumber-secondNumber === answer) {
        counterGoodAnswers++
    } else {
        counterBadAnswers++
    }
} else if (randomOperation === 2) {
    if (firstNumber*secondNumber === answer) {
        counterGoodAnswers++
    } else {
        counterBadAnswers++
    }
} else {
    if (firstNumber/secondNumber === answer) {
        counterGoodAnswers++
    } else {
        counterBadAnswers++
    }
}


alert(` правильних відповідей : не правильних відповідей \n ${counterGoodAnswers} : ${counterBadAnswers}`)
