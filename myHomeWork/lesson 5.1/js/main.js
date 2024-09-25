"use strict";

// получить расчет индекса
function getImt() {
  const button = document.querySelector(".button");

  button.addEventListener("click", function () {
    let massa = document.getElementById("form-weight").value;
    let height = (document.getElementById("form-height").value / 100).toFixed(
      2
    );
    if (isNaN(massa) || massa <= 0 || massa == "") {
      console.log(" Введіть вагу у кілограмах");

      openPopup("massa");
    } else if (isNaN(height) || height <= 0 || height == "") {
      console.log("Введіть зріст у сантіметрах");
      openPopup("height");
    } else {
      let resImt = (massa / (height * height)).toFixed(1);
      console.log(massa);
      console.log(height);
      console.log(resImt);
      clearInfo(); // очищаю инпуты
      determineTheResult(parseFloat(resImt)); // передаю ИМТ в функцию расшифровки
      let popupResultRes = document.querySelector(".popup-result__res");
      popupResultRes.textContent = "Ваш ІМТ склав - " + resImt;
    }
  });
}

// очищаем инпуты
function clearInfo() {
  let massa = document.getElementById("form-weight");
  let height = document.getElementById("form-height");
  height.value = "";
  massa.value = "";
}
// расшифровка результата
function determineTheResult(result) {
  if (result < 18.5) {
    openPopupResult("disadvantages");
    console.log("Недостатня вага: ІМТ < 18.5");
  } else if (result >= 18.5 && result < 24.9) {
    openPopupResult("normal");
    console.log("Нормальна вага: ІМТ входить в діапазон від 18.5 до 24.9");
  } else if (result >= 25 && result < 29.9) {
    openPopupResult("supernatural");
    console.log("Надмірна вага: ІМТ входить в діапазон від 25 до 29.9");
  }
  if (result >= 30.0) {
    openPopupResult("max");
    console.log("Ожиріння: ІМТ виходить за показник 30.0");
  }
}
// открываю попап WARN
function openPopup(argyment) {
  stopScrol();
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  const divRow = document.querySelector(".popup__row-text"); // получил тег пустой див
  divRow.innerHTML = ""; // Очищаем содержимое перед добавлением нового сообщения
  const message = document.createElement("p");
  divRow.appendChild(message);
  message.classList.add("popup__text");
  if (argyment === "massa") {
    message.textContent = "Введіть вагу у кілограмах";
  } else if (argyment === "height") {
    message.textContent = "Введіть зріст у сантіметрах";
  }
}

// закрываю попап
function closePopup() {
  const btn = document.querySelector(".popup__btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    addScrol();
  });
}
//убираю скрол страници
function stopScrol() {
  const body = document.getElementById("body");
  body.classList.add("no-scroll");
}
// возвращаю скрол для страницы при нажатии на ок в кнопке
function addScrol() {
  const body = document.getElementById("body");
  body.classList.remove("no-scroll");
}
// попап с результатом
function openPopupResult(argument) {
  stopScrol();
  const popupResult = document.getElementById("popup-result");
  popupResult.classList.remove("hidden");
  const popupResultText = document.querySelector(".popup-result__text");
  if (argument === "disadvantages") {
    popupResultText.textContent =
      "У Вас недостатня вага: ІМТ < 18.5 А ну швидко за стіл !! )))";
  } else if (argument === "normal") {
    popupResultText.textContent =
      "У Вас нормальна вага: ІМТ входить в діапазон від 18.5 до 24.9  Ну просто ТопчіК !!!";
  } else if (argument === "supernatural") {
    popupResultText.textContent =
      "Надмірна вага: ІМТ входить в діапазон від 25 до 29.9   Ну є трошки )!?";
  } else if (argument === "max") {
    popupResultText.textContent =
      "Ожиріння: ІМТ виходить за показник 30.0  В-а-у-у-у ... всьо, з понеділка фітнес, тренажерка!!";
  }
}
// закрываем попап результат при клике на кнопку ок
function closePopupResult() {
  const popupResultBtn = document.querySelector(".popup-result__btn");
  popupResultBtn.addEventListener("click", function () {
    const popupResult = document.getElementById("popup-result");
    popupResult.classList.add("hidden");
    addScrol();
    console.log("close");
  });
}
getImt();
closePopup();
closePopupResult();
