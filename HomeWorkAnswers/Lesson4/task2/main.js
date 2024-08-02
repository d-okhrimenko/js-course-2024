let count = 10;
let totalWin = 0;
let totalLose = 0;
let playerTry = 0;

function randomDigit() {
  const numberOne = Math.floor(Math.random() * 6) + 1;
  const numberTwo = Math.floor(Math.random() * 6) + 1;

  const operators = ["+", "-", "*", "/"];

  const operator = operators[Math.floor(Math.random() * operators.length)];

  let total;

  if (numberOne > numberTwo) {
    switch (operator) {
      case "+":
        total = numberOne + numberTwo;
        break;
      case "-":
        total = numberOne - numberTwo;
        break;
      case "*":
        total = numberOne * numberTwo;
        break;
      case "/":
        total = numberOne / numberTwo;
        break;
    }
  } else {
    switch (operator) {
      case "+":
        total = numberOne + numberTwo;
        break;
      case "-":
        total = Math.abs(numberOne - numberTwo); // Щоб завжди отримувати додатній результат
        break;
      case "*":
        total = numberOne * numberTwo;
        break;
      case "/":
        if (numberTwo !== 0) {
          total = (numberOne / numberTwo).toFixed(2); // Округлюємо результат до двох знаків після коми
          console.log(total);
        } else {
          return randomDigit(); // Якщо ділення на нуль, генеруємо нові числа
        }
    }
  }
  return { numberOne, numberTwo, operator, total };
}

function playGame() {
  for (let i = 0; i < count; i++) {
    const { numberOne, numberTwo, operator, total } = randomDigit();
    let guess = prompt(
      `Спроба № ${
        i + 1
      }\nПерше число: ${numberOne}.\nДруге число: ${numberTwo}.\nОператор: ${operator}.\nПорахуйте та дайте правильну відповідь?`
    );

    // Коли натиснув "відміна"
    if (guess === null) {
      alert("Гру скасовано.");
      break;
    }

    guess = parseFloat(guess);

    // Нічого не ввести та натиснути "ОК"
    if (isNaN(guess)) {
      alert("Невірне введення. Цей раунд пропущено.");
      i--; // Повторити раунд
      continue;
    }

    if (guess > total) {
      alert("Ви були дуже близько, спробуйте ще раз! :)");
      totalLose++;
    } else if (guess < total) {
      alert("Ви були дуже близько, спробуйте ще раз! :)");
      totalLose++;
    } else {
      alert("Ви вгадали !!!");
      totalWin++;
    }

    console.log(`Спроба № ${i + 1}`);
    console.log("Ваш вибір: " + guess);
    console.log("Правильних відповідей: " + totalWin);
    console.log("Не правильних відповідей: " + totalLose);

    playerTry++;
  }

  alert(
    `Гра закінчена! Ваш результат:\nВгадав - ${totalWin}.\nНе вгадав - ${totalLose}.\nВсього спроб - ${playerTry}.`
  );
}

playGame();
