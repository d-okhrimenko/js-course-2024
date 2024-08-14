// CLASSWORK

document.querySelector("#btnToC").onclick = function () {
  let tempF = +document.querySelector("#temp").value;
  let tempC = ((5 / 9) * (tempF - 32)).toFixed(2);
  showResult(tempC);
};

document.querySelector("#btnToF").onclick = function () {
  let tempC = +document.querySelector("#temp").value;
  let tempF = ((9 / 5) * tempC + 32).toFixed(2);
  showResult(tempF);
};

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}

// HOMEWORK TASK 1

document.querySelector("#determineNumber").onclick = function () {
  let inputNumber = document.querySelector("#number").value;

  if (inputNumber === "") {
    outputNumber.innerHTML = "Ну введи хоч що небудь 🤷‍♀️";
  } else if (isNaN(inputNumber)) {
    outputNumber.innerHTML = "Ти впевнений, що це взагалі число 🙄 ?";
  } else if (+inputNumber % 2 === 0) {
    outputNumber.innerHTML = "Це число парне 😎";
  } else {
    outputNumber.innerHTML = "Це число не парне 🤩";
  }
};

// HOMEWORK TASK 2

let currentDay = document.querySelector("#day");
let day = new Date().getDay();

switch (day) {
  case 0:
    currentDay.innerHTML = "Сьогодні НЕДІЛЯ";
    break;
  case 1:
    currentDay.innerHTML = "Сьогодні ПОНЕДІЛОК";
    break;
  case 2:
    currentDay.innerHTML = "Сьогодні ВІВТОРОК";
    break;
  case 3:
    currentDay.innerHTML = "Сьогодні СЕРЕДА";
    break;
  case 4:
    currentDay.innerHTML = "Сьогодні ЧЕТВЕР";
    break;
  case 5:
    currentDay.innerHTML = "Сьогодні П'ЯТНИЦЯ";
    break;
  case 6:
    currentDay.innerHTML = "Сьогодні СУБОТА";
    break;

  default:
    currentDay.innerHTML = "Ой, яка різниця ... головне, що літо 😎";
}

document.querySelector("#true").onclick = function () {
  document.querySelector("#outputText").innerHTML =
    "Молодець, ти поки ще в здоровому глузді 💪";
};

document.querySelector("#false").onclick = function () {
  document.querySelector("#outputText").innerHTML =
    "JavaScript не обдуриш ! Подивись в календар 🤦‍♂️";
};

// HOMEWORK TASK 3

document.querySelector("#determineYear").onclick = function () {
  let inputYear = document.querySelector("#year").value;

  if (inputYear === "") {
    outputYear.innerHTML = "Ну введи хоч що небудь 🤷‍♀️";
  } else if (isNaN(inputYear)) {
    outputYear.innerHTML = "Щось це не схоже на рік 🙄 ?";
  } else if (inputYear < -45) {
    outputYear.innerHTML =
      "Стоп, стоп ... Юлій Цезар тоді ще не придумав свій календар";
  } else if (
    (+inputYear % 4 === 0 && +inputYear % 100 !== 0) ||
    +inputYear % 400 === 0
  ) {
    outputYear.innerHTML = "Цей рік високосний 😎";
  } else {
    outputYear.innerHTML = "Цей рік не високосний 🤩";
  }
};