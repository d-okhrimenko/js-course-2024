// функція генерації випадкового цілого числа
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
  }
}

let countCorrect = 0;
let countWrong = 0;

for (i = 1; i <= 5; i++) {
  let number1 = getRandomIntInclusive(1, 99);
  let number2 = getRandomIntInclusive(1, 99);
  let operatorNumber = getRandomIntInclusive(1, 4);
  let operatorSign = "";
  let answer = 0;

  // Правильна відповідь
  switch (operatorNumber) {
    case 1: // додавання
      operatorSign = "+";
      answer = number1 + number2;
      break;
    case 2: // віднімання
      operatorSign = "-";
      answer = number1 - number2;
      break;
    case 3: // множення
      operatorSign = "*";
      answer = number1 * number2;
      break;
    case 4: // ділення
      operatorSign = "/";
      answer = Math.round((number1 * 10) / number2) / 10;
      break;
  }

  // Вивід виразу
  alert(`Спроба: ${i} з 5!

    Скільки буде: 
    ${number1} ${operatorSign} ${number2}?`);

  // Запит відповіді у користувача
  let userAnswer = getValue("Введіть вашу відповідь з точністю до десятих");

  // Перевірка та вивід проміжного результату
  if (userAnswer == answer) {
    countCorrect++;
    alert("Правильно! :)");
  } else {
    countWrong++;
    alert(`Не правильно. :( 
      Вірна відповідь ${answer}`);
  }
}

alert(`Усього спроб: ${countCorrect + countWrong}
    в т.ч.:
    - правильних: ${countCorrect}
    - не правильних: ${countWrong}.`);
