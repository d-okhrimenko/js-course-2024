console.log("index_2.html")

function getRandonElementFromArray(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function examination(randomOperation, numberOne, numberTwo, result) {
  if(answer(randomOperation, numberOne, numberTwo) == result) {
    message_yes()
  } else {
    message_no()
  }
}

function answer(randomOperation, numberOne, numberTwo) {
  let answer = prompt("У Вас " + life + " спроби : " + numberOne + " " + randomOperation + " " + numberTwo)
  return +(answer)
}

function message_yes() {
  alert("Yes")
  answerYes += 1
}

function message_no() {
  alert("No")
  life -= 1
}

let life = 3
let answerYes = 0

while(life !== 0) {
  let arrOperation = ["-", "+", "*", "/"]
  let randomOperation = getRandonElementFromArray(arrOperation)
  console.log(randomOperation)
  let numberOne = Math.floor(Math.random() * 100) + 1
  let numberTwo = Math.floor(Math.random() * 100) + 1
  let result
  console.log(numberOne, numberTwo)

  if (randomOperation == "+") {
    result = numberOne + numberTwo
  } else if (randomOperation == "-") {
    result = numberOne - numberTwo
  } else if (randomOperation == "*") {
    result = numberOne * numberTwo
  } else {
    if(numberOne < numberTwo || numberOne % numberTwo !== 0) {
      while(numberOne <= numberTwo || numberOne % numberTwo !== 0) {
        console.log("---")
        numberOne = Math.floor(Math.random() * 100) + 1
        numberTwo = Math.floor(Math.random() * 100) + 1
      }
    }
    result = numberOne / numberTwo
  }
  console.log(randomOperation, numberOne, numberTwo, result)
  examination(randomOperation, numberOne, numberTwo, result)
}

alert("Ви витатили всі спроби, але вирішили " + answerYes + " прикладів.")

