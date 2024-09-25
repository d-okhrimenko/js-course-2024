// Завдання 2

// Написати програму, яка обчислює площу та периметр різних геометричних фігур
// (коло, прямокутник, трикутник). Кожна геометрична фігура повинна мати свою
// окрему функцію для обчислення площі та периметру.

// Кроки для виконання завдання:
// 1. Створити функцію для обчислення площі та периметру кола:
//    - Функція повинна приймати радіус кола.
//    - Використайте формули: площа = π * r², периметр = 2 * π * r.

// 2. Створити функцію для обчислення площі та периметру прямокутника:
//    - Функція повинна приймати довжину і ширину прямокутника.
//    - Використайте формули: площа = довжина * ширина, периметр = 2 *
// (довжина + ширина).

// 3. Створити функцію для обчислення площі та периметру трикутника:
//    - Функція повинна приймати довжини трьох сторін трикутника.
//    - Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)),
// де p = (a + b + c) / 2, периметр = a + b + c.

// 4. Запросити користувача вибрати фігуру і ввести відповідні параметри:
//    - Використайте `prompt` для запиту типу фігури та відповідних параметрів.

// 5. Обчислити площу та периметр вибраної фігури:
//    - Викликати відповідні функції для обчислення площі та периметру.

// 6. Вивести результати:
//    - Використайте `alert` для виведення результатів обчислень.
let userFigure = {
  name: "",
  area: "",
  perimeter: "",
};
let userName = prompt(
  "Привіт мій друже, дозволь запитати твоє імья, щоб в подальшому мені було зручно до тебе звертатися :"
);
let choiceFigure = prompt(
  `Дуже приемно ${userName}!\nНу щож давай ${userName} вибери фігуру (коло, прямокутник, трикутник)`
);
let figures = ["коло", "прямокутник", "трикутник"];
let corectChoice = false;

figures.forEach((el) => {
  if (el === choiceFigure) {
    alert(`Ваш вибір ${choiceFigure}`);
    corectChoice = true;
  }
});

if (corectChoice) {
  switch (choiceFigure) {
    case "коло": {
      let radius = +prompt(`${userName} введіть показники радіуса : `);
      userFigure.name = choiceFigure;
      userFigure.area = getCIrcleArea(radius).toFixed;
      userFigure.perimeter = getCIrclePerimeter(radius).toFixed(2);
      break;
    }
    case "прямокутник": {
      let width = +prompt(`${userName} введіть шерену ${choiceFigure} : `);
      let length = +prompt(`${userName} введіть довжину ${choiceFigure} : `);
      userFigure.name = choiceFigure;
      userFigure.area = getRectangelArea(width, length).toFixed(2);
      userFigure.perimeter = getRectangelPerimeter(width, length).toFixed(2);
      break;
    }
    case "трикутник": {
      let sidesArray = [];
      while (sidesArray.length < 3) {
        let side = +prompt(`${userName} введіть ${sidesArray.length + 1} сторону : `);
        sidesArray.push(side);
      }
      userFigure.name = corectChoice;
      userFigure.area = getTiangleArea(sidesArray[0], sidesArray[1], sidesArray[2]).toFixed(2);
      userFigure.perimeter = getRectangelPerimeter(sidesArray[0], sidesArray[1], sidesArray[2]).toFixed(2);
      break;
    }
  }
} else {
  alert("Невірно вибрана фінура");
}

alert(`${userName} згідно твоїх данних ми маємо :\nФігуру => ${userFigure.name}\nПлоща => ${userFigure.area}
  \nПериметр => ${userFigure.perimeter}`);
//  Функціі для обчислення площі та периметру кола
function getCIrcleArea(radius) {
  let result = Math.PI * Math.pow(radius, 2);
  return result;
}

function getCIrclePerimeter(radius) {
  let result = 2 * Math.PI * radius;
  return result;
}

// Функціі для обчислення площі та периметру прямокутника
function getRectangelArea(width, length) {
  let result = length * width;
  return result;
}

function getRectangelPerimeter(width, length) {
  let result = 2 * (length + width);
  return result;
}

// Функціі для обчислення площі та периметру трикутника
function getTiangleArea(side1 = 0, side2 = 0, side3 = 0) {
  let p = (side1 + side2 + side3) / 2;
  let result = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  return result;
}

function getTianglePerimeter(side1 = 0, side2 = 0, side3 = 0) {
  let result = side1 + side2 + side3;
  return result;
}
