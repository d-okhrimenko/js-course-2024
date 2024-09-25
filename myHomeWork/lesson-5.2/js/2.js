// нет проверки на круг function showResult() {
function showResult() {
  const btnShowResult = document.getElementById("btn-show-result");

  if (btnShowResult) {
    btnShowResult.addEventListener("click", () => {
      // Определяем, какой тип формы активен
      const a1Exists = document.getElementById("a-1") !== null;
      const a2Exists = document.getElementById("a-2") !== null;
      const a3Exists = document.getElementById("a-3") !== null;

      const rectanglePresent = a1Exists && a2Exists && !a3Exists;
      const circlePresent = !a1Exists && !a2Exists && !a3Exists;
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
// проверка при строгом существовании аргументов а б с
// функція для перевірки введених значень на коректність
function checkingTheInputValuesForCorrectness(a, b, c) {
  // Проверяем, что все значения корректны
  if (a < 0 || b < 0 || c < 0) {
    console.log("open warn");
    openPopup("warn");
    closePopupWarn();
    return false; // Возвращаем false, если одно из значений некорректно
  }
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("open warn");
    openPopup("warn");
    closePopupWarn();
    return false; // Возвращаем false, если одно из значений некорректно
  }

  // Проверяем существование треугольника
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Треугольник с такими сторонами не существует.");
    openPopup("isNoTriangle");
    closePopupWarn();
    return false; // Возвращаем false, если треугольник не существует
  }

  return true; // Все проверки пройдены успешно
}
