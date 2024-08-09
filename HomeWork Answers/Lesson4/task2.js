function generateRandomOperator() {
    const operators = ["+", "-", "*"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    return randomOperator;
  }
  
  function game2() {
    let playing = true;
    let rightAn = 0;
    let falseAn = 0;
    
    while (playing) {
      let firstOperand = Math.floor(Math.random() * 101);
      let secondOperand = Math.floor(Math.random() * 101);
      let operator = generateRandomOperator();
      let expr = `${firstOperand} ${operator} ${secondOperand}`;
      console.log(expr);
      let correctAnswer;
      switch (operator) {
        case "+":
          correctAnswer = firstOperand + secondOperand;
          break;
        case "-":
          correctAnswer = firstOperand - secondOperand;
          break;
        case "*":
          correctAnswer = firstOperand * secondOperand;
          break;
      }
  
      let answer;
      let tryAgain = 0;
  
      do {
        let answer = prompt("Введіть правильну відповідь: " + expr);
        if ((parseInt(answer) == correctAnswer)) {
          alert("Молодець");
          rightAn++;
          break;
        } else {
          alert("Неправильно! Спробуйте ще раз.");
          falseAn++;
          tryAgain++;
        }
      } while (tryAgain < 3);
      let contin = prompt("Продовжити? так/ні");
      if (contin.toLowerCase() == "ні") {
        playing = false;
      }
    }
    alert(
      "Гра завершена. Остаточний рахунок: Правильні відповіді " + rightAn + " Неправильні " + falseAn);
  }