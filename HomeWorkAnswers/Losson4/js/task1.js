// Функція випадкового вибору числа в діапазоні min-max
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Функція для вибору комп'ютера
function getPcChoise() {
  let pcChoiseValue = getRandomIntInclusive(1, 3);
  switch (pcChoiseValue) {
    case 1:
      return "камінь";
      break;
    case 2:
      return "ножиці";
      break;
    case 3:
      return "папір";
      break;
  }
}

// Функція перевірки вибору коричтувача лише дозволені слова
function getUserChoise(message) {
  while (true) {
    let value = prompt(message);
    let isValid =
      value == "камінь" ||
      value == "ножиці" ||
      value == "папір" ||
      value == "вихід";
    if (isValid) return value;
  }
}

// Функція вибору переможця
function choiseWinner(pc, user) {
  if (user == "вихід") {
    return user;
  } else if (pc == user) {
    return "нічия";
  } else if (
    (pc == "камінь" && user == "ножиці") ||
    (pc == "ножиці" && user == "папір") ||
    (pc == "папір" && user == "камінь")
  ) {
    return "комп'ютер";
  } else {
    return "користувач";
  }
}

// Стартові показники гри
let countPcWinner = 0;
let countUserWinner = 0;
let countEqually = 0;

while (true) {
  // Вибір комп'ютера
  let pcChoise = getPcChoise();

  // Вибір користувача
  let userChoise = getUserChoise(
    "Введіть: камінь, ножиці, папір або вихід (для закінчення гри)"
  );

  // Якщо "вихід", то вихід
  if (userChoise == "вихід") {
    alert(
      `Зіграно раундів: ${countPcWinner + countUserWinner + countEqually}. 
      Виграно: ${countUserWinner}. 
      Програно: ${countPcWinner}.
      Нічия: ${countEqually}.`
    );
    break;
  }
  // Вибір переможця
  let winner = choiseWinner(pcChoise, userChoise);

  // Рахунок
  if (winner == "комп'ютер") {
    countPcWinner++;
  } else if (winner == "користувач") {
    countUserWinner++;
  } else if (winner == "нічия") {
    countEqually++;
  }

  // Вивід результата гри
  alert(
    `Ваш вибір: ${userChoise}. Вибір компьютера: ${pcChoise}. Переміг: ${winner}`
  );
}
