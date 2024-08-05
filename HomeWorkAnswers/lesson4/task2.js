document.querySelector("#btn").onclick = function () {
  let counterFinish = Number(prompt("Скільки бажаєте зробити спроб?"));
  let counterStart = 0;
  let counterResult = 0;
  while (counterStart < counterFinish) {
    let randomNumb1 = Math.floor(Math.random() * 100) + 1;
    let randomNumb2 = Math.floor(Math.random() * 10) + 1;
    let randomOperator = Math.floor(Math.random() * 4) + 1;
    let result = 0;
    let resultRandom = 0;
    console.log(randomNumb1, randomNumb2, randomOperator);
    if (randomOperator == 1) {
      result = Number(
        prompt("Обчисліть операцію: " + randomNumb1 + "+" + randomNumb2 + "=")
      );
      resultRandom = randomNumb1 + randomNumb2;
    } else if (randomOperator == 2) {
      result = Number(
        prompt("Обчисліть операцію: " + randomNumb1 + "-" + randomNumb2 + "=")
      );
      resultRandom = randomNumb1 - randomNumb2;
    } else if (randomOperator == 3) {
      result = Number(
        prompt("Обчисліть операцію: " + randomNumb1 + "*" + randomNumb2 + "=")
      );
      resultRandom = randomNumb1 * randomNumb2;
    } else if (randomOperator == 4) {
      result = Number(
        prompt(
          "Обчисліть (два знаки після коми)операцію: " +
            randomNumb1 +
            "/" +
            randomNumb2 +
            "="
        )
      );
      resultRandom = (randomNumb1 / randomNumb2).toFixed(2);
      console.log(resultRandom);
    }
    counterStart += 1;
    if (result == resultRandom) {
      counterResult += 1;
      // alert("Вірно!");
    } else {
      alert(`Помилка. Вірна відповідь ${resultRandom}!`);
    }
  }
  if (counterResult > counterFinish / 2) {
    myGame.innerHTML = `Чудово! Маєте ${counterResult} правильних з ${counterFinish} спроб!`;
    myGame.style.color = "blue";
  } else {
    myGame.innerHTML = `Вітаю! Маєте ${counterResult} правильних з ${counterFinish} спроб!`;
    myGame.style.color = "green";
  }
};
