"use strict";
import productListModule from "./productListModule.js";

const filterProductModule = (function () {
  // оримати значення з інпуту
  function handleInputChange() {
    const inputFilterValue = document.getElementById("inp-filter").value.trim();

    productListModule.searchElement(inputFilterValue); // фільтр елементів та обновляю список
  }
  return {
    // Инициализация обработчика события input
    initFilter: function () {
      const inputFilter = document.getElementById("inp-filter");
      inputFilter.addEventListener("input", handleInputChange); // Слушаем событие input для динамической фильтрации
    },
  };
})();

export default filterProductModule;
