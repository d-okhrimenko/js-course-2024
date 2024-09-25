"use strict";
//*----------
const listPointsModule = (function () {
  let arrPoints = [
    25, 2, 12, 88, 50, 28, 1, 2, 12, 36, 50, 28, 25, 2, 65, 82, 56, 99,
  ];
  // Определение шаблона
  const template = document.getElementById("popup-template").innerHTML;

  // Функция обновления контента в попапе
  function updatePopupContent(title, message) {
    const popup = document.querySelector(".popup-result");
    if (popup) {
      // Обновление контента попапа
      const rendered = Mustache.render(template, { title, message });
      popup.innerHTML = rendered;
    } else {
      console.log("Попап не найден.");
    }
  }
  return {
    // рендер насторіку массиву
    renderListPoints: function () {
      const ul = document.querySelector(".item__points");
      ul.innerHTML = "";
      arrPoints.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("item__li");
        li.textContent = item;
        ul.appendChild(li);
      });
    },
    // функція додавання балів при клікі на ОК (ДОДАТИ БАЛ)
    addPointsToList: function () {
      const popupBtn = document.querySelector(".popup__btn");
      popupBtn.addEventListener("click", function () {
        const popupInput = document.querySelector(".popup__input");
        const newPoint = Number(popupInput.value);
        //перевірка на число якщо це число то
        if (isNaN(newPoint)) {
          listPointsModule.getWarnIsNan();
          console.log("Значення повинно бути числом");
        } else if (newPoint < 0) {
          listPointsModule.getWarnIsGreaterThanZero();
          console.log("Значення повинно бути більше 0");
        } else {
          arrPoints.push(newPoint);
          listPointsModule.renderListPoints();
        }
        popupInput.value = ""; // Очистка поля после добавления
        listPointsModule.closePopup();
      });
    },
    // открить попап ВВОДА ДАННЫХ
    openPopup: function () {
      const popup = document.getElementById("popup-add-points");
      popup.classList.remove("hidden");
      listPointsModule.closePopupCrossBtn();
    },
    // закрити попап ВВОДА ДАННЫХ
    closePopup: function () {
      const popup = document.getElementById("popup-add-points");
      popup.classList.add("hidden");
    },
    // закрити попап ПОКАЗУ ДАНИХ
    closePopupResult: function () {
      const popup = document.getElementById("popup-template");
      popup.addEventListener("click", () => {
        popup.classList.add("hidden");
      });
    },
    // закрити попап на крестик
    closePopupCrossBtn: function () {
      const iconCrossBtn = document.getElementById("popup-close-icon"); // Исправьте ID здесь
      if (iconCrossBtn) {
        iconCrossBtn.removeEventListener("click", listPointsModule.closePopup); // Убираем предыдущие слушатели
        iconCrossBtn.addEventListener("click", listPointsModule.closePopup); // Добавляем новый слушатель
      } else {
        console.log("btn undafined");
      }
    },
    // розразунок середнього балу
    getAverageScore: function () {
      let sum = 0;
      let count = 0;
      for (let i = 0; i < arrPoints.length; i++) {
        sum = sum + arrPoints[i];
        count = count + 1;
      }
      let result = Number((sum / count).toFixed(1));
      console.log(sum);
      console.log(count);
      console.log(result);
      listPointsModule.showResultPopup("Ваш середній бал", `склав: ${result}`);
      listPointsModule.closePopupResult();
    },
    // розрахунок найвищого балу
    getHighestScore: function () {
      const highest = Math.max(...arrPoints);
      listPointsModule.showResultPopup("Ваш найвищий бал", `склав: ${highest}`);
      console.log(highest);

      listPointsModule.closePopupResult();
    },
    // розрахунок найнизщого балу
    getLowestScore: function () {
      const lowest = Math.min(...arrPoints);
      listPointsModule.showResultPopup("Ваш найнижчий бал", `склав: ${lowest}`);
      console.log(lowest);

      listPointsModule.closePopupResult();
    },
    // попап попередження ви ввели НЕ ЧИСЛО
    getWarnIsNan: function () {
      listPointsModule.showResultPopup(
        "Увага !!!",
        "Значення повинно бути числом"
      );
      console.log("Увага !!!", "Значення повинно бути числом");

      listPointsModule.closePopupResult();
    },
    // попап попередження ви ввели ЗНАЧЕННЯ БІЛЬШЕ НУЛЯ
    getWarnIsGreaterThanZero: function () {
      listPointsModule.showResultPopup(
        "Увага !!!",
        "Значення повинно бути більше 0"
      );
      console.log("Увага !!!", "Значення повинно бути більше 0");

      listPointsModule.closePopupResult();
    },
    // Показ результата попапа
    showResultPopup: function (title, message) {
      updatePopupContent(title, message);
      const popupResult = document.querySelector(".popup-result");
      if (popupResult) {
        popupResult.classList.remove("hidden");
        listPointsModule.closePopupCrossBtn(); // Обновление обработчика закрытия
      } else {
        console.log("Попап результат не найден.");
      }
    },
  };
})();
export default listPointsModule;
