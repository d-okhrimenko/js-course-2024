/* Завдання 1 */
/* Написати програму, яка аналізує список оцінок студентів і знаходить середній бал, найвищу та найнижчу оцінки */

const createGradesArray = length =>
  Array.from({ length }, () => Math.floor(Math.random() * 101));

const getAverage = arr => {
  let acc = 0;
  arr.forEach(el => (acc += el));
  return parseFloat((acc / arr.length).toFixed(2));
};

const findLowestGrade = arr => Math.min(...arr);

const findHighestGrade = arr => {
  let currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMax) currentMax = arr[i];
  }
  return currentMax;
};

const showResult = (average, highestGrade, lowestGrade) => {
  alert(
    `Середній бал: ${average}, найвища оцінка: ${highestGrade}, найнижча оцінка: ${lowestGrade}`
  );
};

const grades = createGradesArray(30);
const average = getAverage(grades);
const lowestGrade = findLowestGrade(grades);
const highestGrade = findHighestGrade(grades);

showResult(average, highestGrade, lowestGrade);

// Отримання оцінок від користувача

const getNumericValue = message => {
  // Функція фільтрації цілих чисел
  const filterInt = value => {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
    return NaN;
  };

  while (true) {
    let value = prompt(message);
    if (value === null) return null;
    const numValue = filterInt(value);

    let isValid =
      !isNaN(numValue) &&
      value.trim() !== '' &&
      Number.isInteger(numValue) &&
      numValue >= 0 &&
      numValue <= 100;

    if (isValid) return numValue;
    alert('Будь ласка, введіть ціле число від 0 до 100');
  }
};

const inputGrades = () => {
  let grades = [];
  let input;

  while (true) {
    input = getNumericValue(
      "Введіть оцінку або натисніть 'Cancel' для завершення дії"
    );
    if (input === null) break;
    grades.push(input);
  }
  return grades;
};

const gradesFromUser = inputGrades();

if (gradesFromUser.length > 0) {
  const average = getAverage(gradesFromUser);
  const lowestGrade = findLowestGrade(gradesFromUser);
  const highestGrade = findHighestGrade(gradesFromUser);
  showResult(average, highestGrade, lowestGrade);
}

/* Завдання 2 */
/* Написати програму, яка працює зі списком покупок: додає нові товари, видаляє наявні та виводить список товарів на екран */

const shoppingList = ['Морозиво'];

const containerShoppingListItems = document.getElementById(
  'shoppingList__items'
);
const actionButton = document.getElementById('actionButton');

let isFirstLoad = true;

const displayItems = shoppingList => {
  containerShoppingListItems.innerHTML = '';
  shoppingList.forEach(item => {
    const html = `<li class="shoppingList__item added">${item}</li>`;
    containerShoppingListItems.insertAdjacentHTML('beforeend', html);
  });
};

const addItem = item => {
  const itemLowerCase = item.toLowerCase();

  /* Метод some() перевіряє, чи задовольняє хоча б один елемент масиву певній умові. Він повертає true, якщо хоча б один елемент відповідає умові, і false, якщо жоден не відповідає, що означає, що товар не знайдено в існуючому масиві, ! перетворює це в true, і умова в if буде виконана. */

  if (
    !shoppingList.some(
      existingItem => existingItem.toLowerCase() === itemLowerCase
    )
  ) {
    shoppingList.push(item);
    alert('Товар додано');
  } else {
    alert('Товар вже існує в списку');
  }
};

const removeItemByTitle = (array, title) => {
  const titleLowerCase = title.toLowerCase();
  const index = array.findIndex(item => item.toLowerCase() === titleLowerCase);
  if (index !== -1) {
    array.splice(index, 1);
    alert('Товар видалено');
  } else {
    alert(`Товару ${title} немає в списку`);
  }
};

const getAction = (
  message,
  validActions = ['додавання товару', 'видалення товару', 'виведення списку']
) => {
  while (true) {
    const value = prompt(message);
    if (value === null) return null;
    const lowerCaseValue = value.toLowerCase();
    if (validActions.includes(lowerCaseValue)) return lowerCaseValue;
    alert(`Помилка. Будь ласка, введіть: ${validActions.join(', ')}`);
  }
};

const promptForItemName = message => {
  while (true) {
    const itemName = prompt(message);
    if (itemName === null) return null;
    if (itemName) return itemName;
    alert('Назва покупки не може бути порожньою. Спробуйте ще раз');
  }
};

const handleUserAction = () => {
  const action = getAction(
    'Виберіть дію: додавання товару, видалення товару або виведення списку'
  );

  if (action === null) {
    alert('Дія скасована користувачем');
    return;
  }

  if (action === 'додавання товару') {
    while (true) {
      const item = promptForItemName('Введіть назву покупки');
      if (item === null) {
        alert('Додавання товару завершено');
        break;
      }
      addItem(item);
    }
  } else if (action === 'видалення товару') {
    while (true) {
      const item = promptForItemName('Введіть назву товару для видалення');
      if (item === null) {
        alert('Видалення товару завершено');
        break;
      }
      removeItemByTitle(shoppingList, item);
    }
  } else if (action === 'виведення списку') {
    displayItems(shoppingList);
    return;
  }

  handleUserAction();
};

window.onload = () => {
  if (isFirstLoad) {
    displayItems(shoppingList);
    isFirstLoad = false;
  }
};

actionButton.addEventListener('click', handleUserAction);

/* Завдання 1
Написати програму, яка аналізує список оцінок студентів і знаходить середній бал, найвищу та найнижчу оцінки.

Кроки для виконання завдання:

1. Створити масив для зберігання оцінок студентів:
   - Оцінки можуть бути представлені як цілі числа від 0 до 100.

2. Створити функцію для обчислення середнього балу:
   - Функція повинна приймати масив оцінок як аргумент і повертати середнє значення.

3. Створити функцію для знаходження найвищої оцінки:
   - Функція повинна приймати масив оцінок як аргумент і повертати найвищу оцінку.

4. Створити функцію для знаходження найнижчої оцінки:
   - Функція повинна приймати масив оцінок як аргумент і повертати найнижчу оцінку.

5. Запросити користувача ввести кілька оцінок і зберегти їх у масив:
   - Використайте `prompt` для запиту оцінок, можна також згенерувати їх автоматично.

6. Обчислити середній бал, найвищу і найнижчу оцінки:
   - Викликати відповідні функції для обчислень.

7. Вивести результати:
   - Використайте `alert` для виведення середнього балу, найвищої та найнижчої оцінок.


=================================================================
Завдання 2
Написати програму, яка працює зі списком покупок: додає нові товари, видаляє наявні та виводить список товарів на екран.

Кроки для виконання завдання:

1. Створити масив для зберігання списку покупок:
   - Початково масив може бути порожнім або містити кілька базових товарів.

2. Створити функцію для додавання товару до списку:
   - Функція приймає назву товару як аргумент і додає його до масиву.

3. Створити функцію для видалення товару зі списку:
   - Функція приймає назву товару як аргумент, знаходить його у масиві та видаляє.

4. Створити функцію для виведення поточного списку покупок:
   - Функція виводить всі елементи масиву у зручному для читання форматі.

5. Запропонувати користувачу вибрати дію:
   - Використати `prompt` для вибору дії: додавання товару, видалення товару або виведення списку.

6. Реалізувати вибір користувача:
   - Викликати відповідні функції на основі вибраної дії.

7. Повторити процес, поки користувач не завершить роботу:
   - Дати можливість користувачу виконувати дії у циклі.
 */
