let userCount = 0;
let systemCount = 0;
document.querySelector("#user").innerHTML = userCount;
document.querySelector("#system").innerHTML = systemCount;
document.querySelector("#refreshPage").onclick = function () {
  window.location.reload();
};

document.querySelector("#next").onclick = function () {
  startNew(userCount, systemCount);
  if (userCount === 3 || systemCount === 3) {
    alert("Гра завершена! Розпочати нову");
    window.location.reload();
  }
  document.querySelectorAll("*").forEach(function (element) {
    element.style.color = "black";
  });
  document.querySelector("#stone").disabled = false;
  document.querySelector("#scissors").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#variant").innerHTML = "";
};

function startNew(count1, count2) {
  let userChoise;
  let computerChoice;
  let message = document.querySelector("#variant");

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "Камінь";
      break;
    case 2:
      computerChoice = "Ножиці";
      break;
    case 3:
      computerChoice = "Папір";
      break;
    default:
      computerChoice = "";
      break;
  }

  const userChoiseStone = (document.querySelector("#stone").onclick =
    function () {
      document.querySelector("#stone").style.color = "coral";
      userChoise = "Камінь";
      message.innerHTML = computerChoice;
      document.querySelector("#paper").disabled = true;
      document.querySelector("#scissors").disabled = true;
      document.querySelector("#stone").disabled = true;

      if (computerChoice === userChoise) {
        getResult("both");
      } else if (computerChoice === "Ножиці") {
        getResult("true");
      } else if (computerChoice === "Папір") {
        getResult("false");
      }
    });
  const userChoiseScissors = (document.querySelector("#scissors").onclick =
    function () {
      document.querySelector("#scissors").style.color = "coral";
      userChoise = "Ножиці";
      message.innerHTML = computerChoice;
      document.querySelector("#scissors").disabled = true;
      document.querySelector("#paper").disabled = true;
      document.querySelector("#stone").disabled = true;

      if (computerChoice === userChoise) {
        getResult("both");
      } else if (computerChoice === "Папір") {
        getResult("true");
      } else if (computerChoice === "Камінь") {
        getResult("false");
      }
    });
  const userChoisePaper = (document.querySelector("#paper").onclick =
    function () {
      document.querySelector("#paper").style.color = "coral";
      userChoise = "Папір";
      message.innerHTML = computerChoice;
      document.querySelector("#stone").disabled = true;
      document.querySelector("#scissors").disabled = true;
      document.querySelector("#paper").disabled = true;

      if (computerChoice == userChoise) {
        getResult("both");
      } else if (computerChoice === "Камінь") {
        getResult("true");
      } else if (computerChoice === "Ножиці") {
        getResult("false");
      }
    });

  function getResult(res) {
    let result = document.querySelector("#win");
    if (res === "both") {
      result.innerHTML = "Ууупс... Нічия!";
    } else if (res === "true") {
      result.innerHTML = "Вітаю, ти виграв!";
      userCount += 1;
      document.querySelector("#user").innerHTML = userCount;
    } else {
      result.innerHTML = "Нажаль, цього разу виграв компьютер!";
      systemCount += 1;
      document.querySelector("#system").innerHTML = systemCount;
    }
  }
}
startNew(userCount, systemCount);
