"use strict";

import { book } from "./book.js";

const valid = {
  // проверка что инпут не пустой
  inputIsNotNull(value) {
    return value.length > 0;
  },

  // Функция showWarning принимает идентификатор элемента, условие для показа предупреждения и имя класса для скрытия предупреждения
  // В createBook вы вызываете showWarning с разными параметрами в зависимости от проверок, что делает код более читаемым и менее дублирующимся.

  showWarning(elementId, condition, warningClass) {
    const element = document.getElementById(elementId);
    if (condition) {
      element.classList.add(warningClass);
      console.log("клас добавлен");
    } else {
      element.classList.remove(warningClass);
      console.log("клас удален");
    }
  },

  // Метод для проверки наличия книги с данным названием

  bookExists(title, books) {
    return books.some((book) => book.title === title);
  },
};

export { valid };
