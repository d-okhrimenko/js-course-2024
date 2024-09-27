/* Завдання 1 */
/* "Камінь, ножиці, папір" */

/*
Опис гри:
Користувач грає проти комп'ютера в класичну гру "Камінь, ножиці, папір". Програма запитує вибір користувача, генерує випадковий вибір для комп'ютера, визначає переможця та виводить результат.

Кроки для виконання завдання:

1. Введення вибору користувача:
   - Використайте `prompt` для запиту вибору користувача (камінь, ножиці, папір).

2. Генерація вибору комп'ютера:
   - Використайте `Math.random()` для випадкового вибору між каменем, ножицями і папером.

3. Визначення переможця:
   - Використайте умовні конструкції для визначення переможця за правилами гри:
     - Камінь б'є ножиці.
     - Ножиці б'ють папір.
     - Папір б'є камінь.
     - Однакові вибори - нічия.

4. Виведення результату:
   - Використайте `alert` для виведення вибору користувача, вибору комп'ютера та результату гри.

Додаткові завдання:
1. Додати можливість гри кілька раундів з підрахунком загального рахунку.
2. Додати можливість користувачеві вийти з гри за допомогою спеціальної команди (наприклад, введення "вихід")
 */

const items = ['камінь', 'ножиці', 'папір'];
let userScore = 0;
let computerScore = 0;
let rounds = 0;

function getValidValue(message) {
  const validItems = ['камінь', 'ножиці', 'папір', 'вихід'];

  while (true) {
    let value = prompt(message);
    if (value === null) return null;
    let lowerCaseValue = value.toLowerCase();
    if (validItems.includes(lowerCaseValue)) return lowerCaseValue;
    alert('Помилка. Будь ласка, введіть: камінь, ножиці, папір або вихід');
  }
}

while (true) {
  let valueUser = getValidValue(
    'Введіть: камінь, ножиці, папір або вихід - для завершення гри'
  );

  if (valueUser === null) {
    alert('Гра завершена. Дякуємо за гру!');
    break;
  }

  if (valueUser === 'вихід') {
    let finalWinner;

    if (userScore > computerScore) {
      finalWinner = 'користувач';
    } else if (userScore < computerScore) {
      finalWinner = "комп'ютер";
    } else {
      finalWinner = 'нічия';
    }

    let finalMessage = `Гра завершена
  Загальний рахунок: користувач ${userScore} - комп'ютер ${computerScore}
  Раундів: ${rounds}
  Переможець: ${finalWinner}`;

    let finalMessageWithEmoji =
      finalWinner === 'користувач'
        ? finalMessage + ' Вітаємо 😊'
        : finalMessage;

    alert(finalMessageWithEmoji);
    break;
  }

  let valueComp = items[Math.floor(Math.random() * items.length)];
  let result = '';

  if (valueUser === valueComp) {
    result = 'нічия';
  } else if (valueUser === 'камінь' && valueComp === 'ножиці') {
    userScore++;
    result = 'користувач';
  } else if (valueUser === 'ножиці' && valueComp === 'папір') {
    userScore++;
    result = 'користувач';
  } else if (valueUser === 'папір' && valueComp === 'камінь') {
    userScore++;
    result = 'користувач';
  } else {
    computerScore++;
    result = "комп'ютер";
  }

  rounds++;

  alert(
    `Вибір користувача: ${valueUser}
Вибір комп'ютера: ${valueComp}
Переможець: ${result}
Раундів: ${rounds}`
  );
}

/* Завдання 2 */
/* A math quiz */

let correctAnswers = 0;
let wrongAnswers = 0;
const attempts = 5;

for (let i = 0; i < attempts; i++) {
  let numberOne = Math.floor(Math.random() * 10) + 1;
  let numberTwo = Math.floor(Math.random() * 10) + 1;
  let operators = ['+', '-', '*', '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  let expression = `${numberOne} ? ${numberTwo}`;
  let expressionDisplay =
    operator === '+' || operator === '-'
      ? `${numberOne} ${operator} ${numberTwo}`
      : expression;
  let userAnswer = parseFloat(
    prompt(
      `Розв'яжіть: ${expressionDisplay}
    ? = * або /
    При діленні враховуються 2 знаки після крапки`
    )
  );

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    case '/':
      correctAnswer = parseFloat((numberOne / numberTwo).toFixed(2));
      break;
  }

  if (userAnswer === correctAnswer) {
    correctAnswers++;
    alert('Правильно!');
  } else {
    wrongAnswers++;
    alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
  }
}

alert(
  `Гра завершена! Кількість правильних відповідей: ${correctAnswers}, кількість неправильних відповідей: ${wrongAnswers}`
);
