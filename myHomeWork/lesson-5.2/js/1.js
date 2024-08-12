"use strict";
//*-- початок логіки
// функція початку розрахунків клік на квадрат, клик на треугольник и клик на круг  открывает попапы с соответствующмими полями для заполнения по треугольнику по кругу и прмоугольнику
function startRectangle(rectangle, isCircle, triangle) {
  if (rectangle) {
    const square = document.getElementById("square");
    square.addEventListener("click", () => {
      cleanInput();
      openPopup("Rectangle");
    });
  } else {
    console.log("Не найден " + square);
  }

  if (isCircle) {
    const circleElem = document.getElementById("circle");
    circleElem.addEventListener("click", () => {
      console.log("open circle");

      cleanInput();
      openPopup("Circle");
    });
  } else {
    console.log("Не найден " + circleElem);
  }
  if (triangle) {
    const triangleElem = document.getElementById("triangle");
    triangleElem.addEventListener("click", () => {
      console.log("open triangle");

      cleanInput();
      openPopup("Triangle");
    });
  }
}
startRectangle(true, true, true);
// після відкриваеється попап з потрібними полями для заповнення значень у інпути
// функція відкрити попап передаю у якості аргументів різні форми для заповнення даними

function openPopup(argyment) {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  const form = document.getElementById("form");
  if (argyment === "Rectangle") {
    form.innerHTML = `
        <div class="form__line">
            <label for="a-1" class="form__label">Введіть ширину прямокутника (м)</label>
            <input id="a-1" type="text" class="form__input">
        </div>
        <div class="form__line">
            <label for="a-2" class="form__label">Введіть висоту прямокутника (м)</label>
            <input id="a-2"  class="form__input">
        </div>
         <button id="btn-show-result" type="button" class="popup-btn"> обчислити результат </button> 
      `;

    showResult();
  } else if (argyment === "Circle") {
    form.innerHTML = `
        <div class="form__line">
            <label for="a-1" class="form__label">Введіть радіус кола в (м)</label>
            <input id="a-1" type="text" class="form__input">
        </div>
         <button id="btn-show-result" type="button" class="popup-btn" > обчислити результат </button> 
      `;
    showResult();
  } else if (argyment === "Triangle") {
    form.innerHTML = `
        <div class="form__line">
            <label for="a-1" class="form__label">Введіть дліну сторони 'a' (м)</label>
            <input id="a-1" type="text" class="form__input">
        </div>
        <div class="form__line">
            <label for="a-2" class="form__label">Введіть дліну сторони 'b' (м)</label>
            <input id="a-2"  class="form__input">
        </div>
        <div class="form__line">
            <label for="a-3" class="form__label">Введіть дліну сторони 'c' (м)</label>
            <input id="a-3"  class="form__input">
        </div>
         <button id="btn-show-result" type="button" class="popup-btn" > обчислити результат </button> 
      `;
    showResult();
  } else if (argyment === "warn") {
    form.innerHTML = `
            <div class="form__line">
             <label for="a-1" class="form__label">Увага !!! </label>
            </div>
            <div class="form__line">
                <label for="a-2" class="form__label">Ви не коректно заповнили поля у формі</label>
              
            </div>

            <button id="btn-close" type="button" class="popup-btn" > ok </button> 
      `;

    console.log("warn в функции попап");
  } else if (argyment === "isNoTriangle") {
    form.innerHTML = `
            <div class="form__line">
             <label for="a-1" class="form__label">Увага !!! </label>
            </div>
            <div class="form__line">
                <label for="a-2" class="form__label">Трикутника з такими сторонами не існує</label>
              
            </div>

            <button id="btn-close" type="button" class="popup-btn" > ok </button> 
      `;

    console.log("warn варн варн");
  }
}
//openPopup("isNoTriangle");
// функція яка отримую значення яке вводить користувач у інпути та запускає функцію обчислення результатів
function getValueSides(rectangle, circle, triangle) {
  if (rectangle) {
    const a1Elem = document.getElementById("a-1");
    const a2Elem = document.getElementById("a-2");
    if (a1Elem && a2Elem) {
      const a1 = parseFloat(a1Elem.value);
      const a2 = parseFloat(a2Elem.value);
      if (checkingTheInputValuesForCorrectness(a1, a2)) {
        getAreaAndPerimeterOfARectangle(a1, a2);
      }
    }
  }
  if (circle) {
    const a1Elem = document.getElementById("a-1");
    if (a1Elem) {
      const a1 = parseFloat(a1Elem.value);
      getAreaAndPerimeterOfACircle(a1);
    }
  }
  if (triangle) {
    const a1Elem = document.getElementById("a-1");
    const a2Elem = document.getElementById("a-2");
    const a3Elem = document.getElementById("a-3");
    if (a1Elem && a2Elem && a3Elem) {
      const a1 = parseFloat(a1Elem.value);
      const a2 = parseFloat(a2Elem.value);
      const a3 = parseFloat(a3Elem.value);
      getAreaAndPerimeterOfATriangle(a1, a2, a3);
    }
  }
}

//*?---- обчислюю результат при кліки на кнопку ОБЧИСЛИТИ РЕЗУЛЬТАТ

function showResult() {
  const btnShowResult = document.getElementById("btn-show-result");

  if (btnShowResult) {
    btnShowResult.addEventListener("click", () => {
      // Определяем, какой тип формы активен
      const a1Exists = document.getElementById("a-1") !== null;
      const a2Exists = document.getElementById("a-2") !== null;
      const a3Exists = document.getElementById("a-3") !== null;

      const rectanglePresent = a1Exists && a2Exists && !a3Exists;
      const circlePresent = a1Exists && !a2Exists && !a3Exists;
      const trianglePresent = a1Exists && a2Exists && a3Exists;

      // Получаем значения из инпутов
      let inputs = [];
      if (rectanglePresent) {
        inputs = [
          parseFloat(document.getElementById("a-1").value),
          parseFloat(document.getElementById("a-2").value),
        ];
      } else if (circlePresent) {
        inputs = [parseFloat(document.getElementById("a-1").value)];
      } else if (trianglePresent) {
        inputs = [
          parseFloat(document.getElementById("a-1").value),
          parseFloat(document.getElementById("a-2").value),
          parseFloat(document.getElementById("a-3").value),
        ];
      }

      // Проверяем введенные значения
      const inputsValid = checkingTheInputValuesForCorrectness(...inputs);

      if (!inputsValid) {
        return; // Прекращаем выполнение, если есть ошибка
      }

      // Вызов функции с соответствующими параметрами
      getValueSides(rectanglePresent, circlePresent, trianglePresent);
      // Открыть попап с результатом
      openPopupResult();
    });
  } else {
    console.log("Кнопка для показа результата не найдена.");
  }
}

//showResult();

// * ----- далі працюємо з ПРЯМОКУТНИКОМ
// Створити функцію для обчислення площі та периметру прямокутника:
function getAreaAndPerimeterOfARectangle(w, h) {
  let area = Number((w * h).toFixed(1));
  let perimeter = Number(((w + h) * 2).toFixed(1));

  printRectangle(area, perimeter);
}
// функція для друку результату площі та периметру прямокутника
function printRectangle(s, p) {
  let area = document.getElementById("area");
  let perimetr = document.getElementById("perimetr");
  area.textContent = "Площа прямокутника дорівнює - " + s + " метр кв. ";
  perimetr.textContent = " Периметр прямокутника дорівнює - " + p + " метр. ";
  console.log(
    "Площа прямокутника дорівнює - " +
      s +
      " метр кв. " +
      " Периметр прямокутника дорівнює - " +
      p +
      " метрів "
  );
}
// * -- працюємо з КОЛОМ
// Створити функцію для обчислення площі та периметру кола:
function getAreaAndPerimeterOfACircle(r) {
  let area = Number((Math.PI * r * r).toFixed(1));
  let perimeter = Number((Math.PI * 2 * r).toFixed(1));
  //   console.log(area);
  //   console.log(perimeter);
  printCircle(area, perimeter);
}
// функція для распечатки площі кола та периметру
function printCircle(s, p) {
  let area = document.getElementById("area");
  let perimetr = document.getElementById("perimetr");
  area.textContent = "Площа кола дорівнює - " + s + " метр кв. ";
  perimetr.textContent = " Периметр кола дорівнює - " + p + " метр. ";
  console.log(
    "Площа кола дорівнює - " +
      s +
      " метр кв. " +
      " Периметр кола дорівнює - " +
      p +
      " метрів "
  );
}
//*--- працюю з ТРИКУТНИКОМ
// Створити функцію для обчислення площі та периметру трикутника:
function getAreaAndPerimeterOfATriangle(a, b, c) {
  // перевірка на те що трикутник з такими сторонами існує
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Треугольник с такими сторонами не существует.");
    openPopup("isNoTriangle");
    return; // Выходим из функции, так как треугольник не существует
  }
  let s = (a + b + c) / 2;

  // Розраховую площу за формулою Герона
  let area = Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(1));

  let perimeter = Number((a + b + c).toFixed(1));
  printTriangle(area, perimeter);
}

// функція для друку результату площі та периметру трикутника:

function printTriangle(s, p) {
  let area = document.getElementById("area");
  let perimetr = document.getElementById("perimetr");
  area.textContent = "Площа трикутника дорівнює - " + s + " метр кв. ";
  perimetr.textContent = " Периметр трикутника дорівнює - " + p + " метр. ";
  console.log(
    "Площа трикутника дорівнює - " +
      s +
      " метр кв. " +
      " Периметр трикутника дорівнює - " +
      p +
      " метрів "
  );
}
// допоміжні функції
// функция открытия попапа с результатом при клике на ОБЧИСЛИТИ РЕЗУЛЬТАТ
function openPopupResult() {
  const popup = document.getElementById("popup-result");
  popup.classList.remove("hidden");
}

// функция закрытия попапа с результатом при клике на ок
function closePopupResult() {
  const btn = document.querySelector(".popup-result__btn");
  btn.addEventListener("click", () => {
    const popupRes = document.getElementById("popup-result");
    popupRes.classList.add("hidden");
    console.log("close-result");
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    console.log("close");
    // закрываю и первый попап с запрос значений
  });
}
closePopupResult();
// функция очистки инпутов
function cleanInput() {
  const a1 = document.getElementById("a-1");
  const a2 = document.getElementById("a-2");
  const a3 = document.getElementById("a-3");
  if (a1) a1.value = "";
  if (a2) a2.value = "";
  if (a3) a3.value = "";
}

// закрыть попап при клике на иконку крестик
function closePopup() {
  const iconClose = document.getElementById("popup-close-icon");
  iconClose.addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    console.log("close");
  });
}
closePopup();
// функція для перевірки введених значень на коректність
function checkingTheInputValuesForCorrectness(...nums) {
  for (const num of nums) {
    if (isNaN(num) || num < 0) {
      console.log("open warn");
      openPopup("isNoTriangle");
      closePopupWarn();
      return false; // повертаю фолсе якщо значення не коректне
    }
  }
  return true; // тру якщо значення корректне
}
// функція закрити попап попередження
function closePopupWarn() {
  const btnClose = document.getElementById("btn-close");
  btnClose.addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    console.log("закрыть ошибку");
  });
}
