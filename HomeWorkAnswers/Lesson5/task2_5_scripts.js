// Завдання 2

// Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник). Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.

// Кроки для виконання завдання:
// 1. Створити функцію для обчислення площі та периметру кола:
//    - Функція повинна приймати радіус кола.
//    - Використайте формули: площа = π * r², периметр = 2 * π * r.

// 2. Створити функцію для обчислення площі та периметру прямокутника:
//    - Функція повинна приймати довжину і ширину прямокутника.
//    - Використайте формули: площа = довжина * ширина, периметр = 2 * (довжина + ширина).

// 3. Створити функцію для обчислення площі та периметру трикутника:
//    - Функція повинна приймати довжини трьох сторін трикутника.
//    - Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)), де p = (a + b + c) / 2, периметр = a + b + c.

// 4. Запросити користувача вибрати фігуру і ввести відповідні параметри:
//    - Використайте `prompt` для запиту типу фігури та відповідних параметрів.

// 5. Обчислити площу та периметр вибраної фігури:
//    - Викликати відповідні функції для обчислення площі та периметру.

// 6. Вивести результати:
//    - Використайте `alert` для виведення результатів обчислень.
// length of the first side of the triangle
// the second
// the third

function getNumericValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
  }
}

let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2); // arrow f-n

function getCirclePerimeter() {
  return 2 * Math.PI * radius;
}

let firstSideOfTriangle;
let secondSideOfTriangle;
let thirdSideOfTriangle;
let radius;

let figureType = prompt("Виберіть фігуру для якої потрібно вичислити площу");
if (figureType == "трикутник") {
  let firstSideOfTriangle = getNumericValue(
    "Введіть довжину першої сторони трикутника"
  );
  let secondSideOfTriangle = getNumericValue(
    "Введіть довжину другої сторони трикутника"
  );
  let thirdSideOfTriangle = getNumericValue(
    "Введіть довжину третьої сторони трикутника"
  );
  getTriangleArea();
} else if (figureType == "коло") {
  let radius = getNumericValue("Введіть радіус кола");
  let area = getCircleArea(radius);
  let perimeter = getCirclePerimeter(radius);
  console.log(radius);
  console.log(perimeter);
  console.log(area);
}
function getTriangleArea() {
  return firstSideOfTriangle + secondSideOfTriangle + thirdSideOfTriangle;
}
let area = getTriangleArea();
console.log(area);
// площа = √(p * (p - a) * (p - b) * (p - c)), де p = (a + b + c) / 2, периметр = a + b + c.
