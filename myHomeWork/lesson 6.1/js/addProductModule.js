"use strict";
import productListModule from "./productListModule.js";
// логіка по інпуту. отримую значення з інпуту
let addProductModule = (function () {
  // функція для обробки кліку та функція що буде викликатися при клікі
  function handleAddProductClick() {
    const inputAdd = document.getElementById("inp-add").value;
    if (inputAdd) {
      // додавання продукту та оновлення списку
      productListModule.addProductToArr(inputAdd); // виклик модуля з іншого модуля
      productListModule.renderProducts(); // Перерисовка списка продуктів
      clearInput(); // Очистка инпута
    }
  }
  // очищую інпут від колишнього значення
  function clearInput() {
    const inputAdd = (document.getElementById("inp-add").value = "");
  }
  // повертаю ті функції які буду використовувать за межами модуля у файлі майн
  return {
    getProductValue: function () {
      const btnAdd = document.getElementById("btn-add"); // кнопка дадати
      btnAdd.addEventListener("click", handleAddProductClick); // функція що викликається при кліку на кнопку
    },
    clearInput: clearInput, // функція доступна всередені модуля
  };
})();

export default addProductModule;
