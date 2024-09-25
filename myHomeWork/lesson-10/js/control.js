"use strict";
import { book } from "./book.js";
const control = {
  // функция закрить попап
  closePopup() {
    const popup = document.getElementById("popup-form");
    popup.classList.add("hidden");
    book.cleanInputBook();
    console.log("Popup closed");
    control.blockedScroll("close");
  },

  // закрыть попа на крестик
  clickOnCross() {
    const cross = document.getElementById("popup-close-icon");
    cross.addEventListener("click", function () {
      control.closePopup();
      control.closeWarnSpan();
    });
  },

  // убрать класс ошибку у всех спан
  closeWarnSpan() {
    let spanWarn = document.querySelectorAll(".warn");
    spanWarn.forEach((el) => {
      el.classList.add("warn-none");
    });
  },

  // функция открыть попап
  openPopup() {
    const popup = document.getElementById("popup-form");
    popup.classList.remove("hidden");
    //console.log("Popup open");
    control.blockedScroll("open");
  },
  // открыть попопа клик на кнопку  ДОДАТИ КНИГУ
  openPopupClickBtnAddBook() {
    const btnOpen = document.getElementById("btn-add");
    btnOpen.addEventListener("click", function () {
      control.openPopup();
      control.closeWarnSpan(); // убираю класс ошибки у всех спан
    });
  },

  // блокирую скрол
  blockedScroll(argument) {
    const body = document.getElementById("body");
    if (argument === "open") {
      body.classList.add("no-scroll");
      //console.log("Blocked scroll");
    } else if (argument === "close") {
      body.classList.remove("no-scroll");
    }
  },

  // добавить книгу в массив или редагувати книгу (отправляю форму) клик на ЗБЕРЕГТИ
  addBookToArr() {
    const forma = document.getElementById("form");
    forma.addEventListener("submit", (e) => {
      e.preventDefault(); // предотвращаем отправку формы

      const newBook = book.createBook(); // создаем объект книги

      // Если метод createBook вернул null (валидация не пройдена), выходим
      if (newBook === null) {
        console.log("Валидация не пройдена, попап не будет закрыт");
        return; // не закрываем попап и не продолжаем дальше
      }

      book.addOrUpdateBook(newBook); // если объект книги создан, добавляем или обновляем книгу
      control.closePopup(); // закрываем попап только если книга успешно создана
    });
  },
};

export { control };
