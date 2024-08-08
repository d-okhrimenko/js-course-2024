function getRandomOperation() {
  let randomOperations = ["+", "-", "*", "/"];
  let randomNumber = Math.floor(Math.random() * 4);
  return randomOperations[randomNumber];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function resultOp(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber;
      break;
    case "-":
      return firstNumber - secondNumber;
      break;
    case "*":
      return firstNumber * secondNumber;
      break;
    case "/":
      return firstNumber / secondNumber;
      break;

    default:
      alert("!!!Увага, виникла непередбачувана помилка!!!");
      break;
  }
}
let corectAnswer = 0;
let incorectAnswer = 0;

while (true) {
  let firstNumber = getRandomNumber();
  let secondNumber = getRandomNumber();
  let operation = getRandomOperation();
  let userResult = +prompt(
    `${firstNumber} ${operation} ${secondNumber} = \n Запишіть правильну відповідь: `
  );
  let result = resultOp(firstNumber, secondNumber, operation);
  if (result == userResult) {
    alert("ВІТАЄМО, ЦЕ ВІРНО");
    corectAnswer++;
  } else {
    alert("ХА-ХА-ХА невірно");
    incorectAnswer++;
  }

  alert(
    `Правильна відповідь: ${result} \nПравильні відповіді ${corectAnswer} з ${
      corectAnswer + incorectAnswer
    } `
  );
}
