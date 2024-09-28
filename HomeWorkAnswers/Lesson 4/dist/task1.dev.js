"use strict";

while (true) {
  var userChoice = prompt("Сделай свой выбор (камень, ножницы, бумага):").toLowerCase();

  if (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага") {
    alert("Выберите что-то одно (камень, ножницы, бумага)");
  } else {
    var choices = ["камень", "ножницы", "бумага"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result = void 0;

    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (userChoice === "камень" && computerChoice === "ножницы" || userChoice === "ножницы" && computerChoice === "бумага" || userChoice === "бумага" && computerChoice === "камень") {
      result = "Ты победил!";
    } else {
      result = "Компьютер победил!";
    }

    alert("\u0422\u044B \u0432\u044B\u0431\u0440\u0430\u043B: ".concat(userChoice, "\n\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B: ").concat(computerChoice, "\n").concat(result));
  }
}