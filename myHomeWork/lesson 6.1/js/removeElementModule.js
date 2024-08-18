"use strict";
import productListModule from "./productListModule.js";
const removeElementModule = (function () {
  function openPopup() {
    const popupWarn = document.getElementById("popup-warn");
    popupWarn.classList.remove("hidden");
  }

  return {
    // оримати значення з інпуту
    handleBtnClick: function () {
      const btnDel = document.getElementById("dell-btn");
      btnDel.addEventListener("click", function () {
        // Получаем значение продукта, который нужно удалить
        let productToDelete = document
          .getElementById("inp-filter")
          .value.trim();
        console.log(productToDelete);

        // Находим индекс продукта
        const index = productListModule.getProductIndex(productToDelete);
        if (index !== -1) {
          // Удаляем продукт по индексу
          productListModule.removeProductFromArr(index);

          // Перерисовываем список продуктов
          productListModule.renderProducts();
        } else {
          openPopup();
          console.log("Продукт не найден");
        }
        productToDelete = document.getElementById("inp-filter").value = "";
      });
    },
    closePopup: function () {
      const popupBtn = document.querySelector(".popup__btn");
      if (popupBtn) {
        popupBtn.addEventListener("click", function () {
          const popupWarn = document.getElementById("popup-warn");
          popupWarn.classList.add("hidden");
          productListModule.renderProducts();
        });
      } else {
        console.log("кнопка не найдена");
      }
    },
  };
})();
export default removeElementModule;
