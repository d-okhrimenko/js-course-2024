let countWin = 0;
let countNoWin = 0;
while (true) {
  let operand1 = Math.floor(Math.random() * 10 + 1);
  let operand2 = Math.floor(Math.random() * 10 + 1);
  let strOperation = "+-*/";
  let resualtPC;
  let randomIndex = Math.floor(Math.random() * strOperation.length);
  let randomOperation = strOperation[randomIndex];
  switch (randomOperation) {
    case "+":
      resualtPC = operand1 + operand2;
      break;
    case "-":
      resualtPC = operand1 - operand2;
      break;
    case "*":
      resualtPC = operand1 * operand2;
      break;
    case "/":
      resualtPC = operand1 / operand2;
    default:
      break;
  }

  function getValue(message) {
    //Перевірка на коректність вводу даних користувачем
    let isValid = false;
    while (true) {
      let resultInput = +prompt(message);
      if (resultInput || resultInput == 0) {
        return resultInput;
      }
    }
  }

  // console.log("Averege is " + avg.toFixed(2));

  let chckResult = false;
  let resultUser;

  for (let index = 0; index < 5; index++) {
    // alert(
    //     `${operand1} ${randomOperation} ${operand2} = `
    //   );
    //alert(`Спроба ${index + 1} з 5`);
    resultUser = getValue(
      `Спроба ${index + 1} з 5\nВведіть результат над двома випадковими числами від 1 до 10 та випадковою операцією ${randomOperation}`
    );

    if (resultUser == resualtPC) {
      alert(
        `Ви дали правільну відповідь\n ${operand1} ${randomOperation} ${operand2} = ${resultUser}`
      );
      chckResult = true;
      break;
    }
  }
  // Підрахунок виграних/програних спроб
  if (chckResult) {
    countWin++;
  } else {
    countNoWin++;
    alert(
      `Ви дали не правільну відповідь\n ${operand1} ${randomOperation} ${operand2} != ${resultUser}`
    );
  }
  // Продовження або завершення гри
  if (
    prompt(
      `Результати гри: виграли ${countWin} раз(и), програли ${countNoWin} раз(и)\nДля продовження гри введіть Y, для завершення N`
    ) == "N"
  )
    break;
}