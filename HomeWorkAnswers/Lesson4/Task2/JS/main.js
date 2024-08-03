window,
  addEventListener("load", () => {
    let winner = document.querySelector("#winner");
    let attempts = document.querySelector("#attempts");
    let btn = document.querySelector("#btn");
    let winClose = document.querySelector("#closeBtn");
    let gameRestart = document.querySelector("#btnRestart");

    let countWinner = 0;
    let countTry = 3;

    btn.addEventListener("click", () => {
      if (countTry === 1) {
        btn.disabled = true;
      }
      startGame();
    });

    gameRestart.addEventListener("click", ()=>{
      btn.disabled = false;
      countWinner = 0;
      countTry = 3;
      winner.textContent = countWinner;
    })
    winClose.addEventListener("click", () => {
      window.close();
    });

    function startGame() {
      let firstValue;
      let secondValue;
      let randomsign;
      let signsArray = ["+", "-", "*", "/"];

      while (true) {
        firstValue = Math.floor(Math.random() * 11);
        secondValue = Math.floor(Math.random() * 11);
        randomsign = Math.floor(Math.random() * 4);

        if (firstValue === 0 && randomsign === 3) {
          continue;
        } else {
          break;
        }
      }

      let result = getResult(firstValue, randomsign, secondValue);
      console.log(result);

      let userAnswer = +prompt(`${firstValue} ${signsArray[randomsign]} ${secondValue} = ?`);
      if (userAnswer === result) {
        countWinner++;
        winner.textContent = countWinner;
        countTry = 3;
        attempts.textContent = countTry;
        alert("You'r WINNER");
      } else {
        countTry--;
        attempts.textContent = countTry;
        alert("You'r LOSER");
      }
    }

    function getResult(operant1, sign, operant2) {
      let resultMath = 0;
      switch (sign) {
        case 0: {
          resultMath = operant1 + operant2;
          break;
        }
        case 1: {
          resultMath = operant1 - operant2;
          break;
        }
        case 2: {
          resultMath = operant1 * operant2;
          break;
        }
        case 3: {
          resultMath = (operant1 / operant2).toFixed(2);
          break;
        }
      }
      return resultMath;
    }
  });
