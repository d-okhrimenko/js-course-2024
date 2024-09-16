while (true) {
  const userChoice = prompt(
    "Сделай свой выбор (камень, ножницы, бумага):"
  ).toLowerCase();

  if (
    userChoice !== "камень" &&
    userChoice !== "ножницы" &&
    userChoice !== "бумага"
  ) {
    alert("Выберите что-то одно (камень, ножницы, бумага)");
  } else {
    const choices = ["камень", "ножницы", "бумага"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Ты победил!";
    } else {
      result = "Компьютер победил!";
    }

    alert(
      `Ты выбрал: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`
    );
  }
}
