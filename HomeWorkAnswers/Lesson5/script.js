// Common

const getPositiveValue = message => {
  while (true) {
    let value = prompt(message);
    if (value === null) return null;
    value = value.replace(',', '.');
    let isValid = !isNaN(value) && value.trim() !== '' && Number(value) > 0;
    if (isValid) return Number(value);
    alert('Будь ласка, введіть позитивне ненульове число');
  }
};

/* Завдання 1 */
/* Програма, яка обчислює індекс маси тіла */

const calculateBodyMassIndex = (weightKg, heightM) =>
  (weightKg / heightM ** 2).toFixed(1);

const getBMICategory = bmi => {
  if (bmi < 18.5) {
    return 'Недостатня вага';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Нормальна вага';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Надмірна вага';
  } else if (bmi >= 30) {
    return 'Ожиріння';
  }
};

const weightKg = getPositiveValue('Введіть вашу вагу в кілограмах:');
const heightM = getPositiveValue('Введіть ваш ріст в метрах, наприклад, 1.71:');

if (weightKg !== null && heightM !== null) {
  const bmi = calculateBodyMassIndex(weightKg, heightM);
  const category = getBMICategory(bmi);
  alert(`Ваш ІМТ: ${bmi} (${category})`);
}

/* Завдання 2 */
/* Програма, яка обчислює площу та периметр різних геометричних фігур */

const getCircleMetrics = radius => {
  const PI = Math.PI;

  const getCircleArea = radius => PI * Math.pow(radius, 2);
  const getCirclePerimeter = radius => 2 * PI * radius;

  const area = getCircleArea(radius);
  const perimeter = getCirclePerimeter(radius);

  displayResults(area, perimeter);
};

const getRectangleMetrics = (length, width) => {
  const getRectangleArea = (length, width) => length * width;
  const getRectanglePerimeter = (length, width) => 2 * (length + width);

  const area = getRectangleArea(length, width);
  const perimeter = getRectanglePerimeter(length, width);

  displayResults(area, perimeter);
};

const getTriangleMetrics = (a, b, c) => {
  const getTriangleArea = (a, b, c) => {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  };

  const getTrianglePerimeter = (a, b, c) => a + b + c;

  const isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

  if (isValidTriangle(a, b, c)) {
    const area = getTriangleArea(a, b, c);
    const perimeter = getTrianglePerimeter(a, b, c);

    displayResults(area, perimeter);
  } else {
    alert(
      `Задані значення не утворюють трикутник.
Сума довжин двох будь-яких сторін трикутника завжди перевищує довжину третьої сторони`
    );
  }
};

const getValidValue = message => {
  const validValues = ['коло', 'прямокутник', 'трикутник'];

  while (true) {
    const value = prompt(message);
    if (value === null) return null;
    const lowerCaseValue = value.toLowerCase();
    if (validValues.includes(lowerCaseValue)) return lowerCaseValue;
    alert('Помилка. Будь ласка, введіть: коло, прямокутник або трикутник');
  }
};

const selectShape = () => {
  const shape = getValidValue(
    'Виберіть фігуру: коло, прямокутник або трикутник'
  );

  if (shape === 'коло') {
    const radius = getPositiveValue('Введіть радіус');
    getCircleMetrics(radius);
  } else if (shape === 'прямокутник') {
    const length = getPositiveValue('Введіть довжину прямокутника');
    const width = getPositiveValue('Введіть ширину прямокутника');
    getRectangleMetrics(length, width);
  } else if (shape === 'трикутник') {
    const a = getPositiveValue('Введіть довжину сторони a трикутника:');
    const b = getPositiveValue('Введіть довжину сторони b трикутника:');
    const c = getPositiveValue('Введіть довжину сторони c трикутника:');
    getTriangleMetrics(a, b, c);
  } else {
    alert('Щось пішло не так. Перезапустіть програму і спробуйте ще раз');
  }
};

const displayResults = (area, perimeter) => {
  alert(
    `Площа: ${parseFloat(area.toFixed(2))} Периметр: ${parseFloat(
      perimeter.toFixed(2)
    )}`
  );
};

selectShape();

/* Завдання 1
Написати програму, яка обчислює індекс маси тіла (ІМТ) і дає рекомендації на основі отриманого значення.

Кроки для виконання завдання:

1. Створити функцію для обчислення ІМТ:
   - Формула: Індекс маси тіла розраховується шляхом ділення маси тіла (у кілограмах) на квадрат росту (у метрах квадратних)

2. Створити функцію для визначення категорії ІМТ:
   - Використайте стандартні категорії ВООЗ:
     - Недостатня вага: ІМТ < 18.5
     - Нормальна вага: 18.5 ≤ ІМТ < 24.9
     - Надмірна вага: 25 ≤ ІМТ < 29.9
     - Ожиріння: ІМТ ≥ 30

3. Запросити користувача ввести вагу і ріст:
   - Використайте `prompt` для запиту ваги та росту.

4. Обчислити ІМТ користувача і визначити категорію:
   - Викликати функції для обчислення ІМТ та визначення категорії.

5. Вивести результати:
   - Використайте `alert` для виведення ІМТ та відповідної категорії.

=================================================================

Завдання 2

Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник). Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.

Кроки для виконання завдання:
1. Створити функцію для обчислення площі та периметру кола:
   - Функція повинна приймати радіус кола.
   - Використайте формули: площа = π * r², периметр = 2 * π * r.

2. Створити функцію для обчислення площі та периметру прямокутника:
   - Функція повинна приймати довжину і ширину прямокутника.
   - Використайте формули: площа = довжина * ширина, периметр = 2 * (довжина + ширина).

3. Створити функцію для обчислення площі та периметру трикутника:
   - Функція повинна приймати довжини трьох сторін трикутника.
   - Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)), де p = (a + b + c) / 2, периметр = a + b + c.

4. Запросити користувача вибрати фігуру і ввести відповідні параметри:
   - Використайте `prompt` для запиту типу фігури та відповідних параметрів.

5. Обчислити площу та периметр вибраної фігури:
   - Викликати відповідні функції для обчислення площі та периметру.

6. Вивести результати:
   - Використайте `alert` для виведення результатів обчислень. */
