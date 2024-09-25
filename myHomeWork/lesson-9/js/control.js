"use strict";
import { book } from "./book.js";
const control = {
  // функция закрить попап
  closePopup() {
    const popup = document.getElementById("popup-form");
    popup.classList.add("hidden");
    console.log("Popup closed");
    control.blockedScroll("close");
  },

  // закрыть попа на крестик
  clickOnCross() {
    const cross = document.getElementById("popup-close-icon");
    cross.addEventListener("click", function () {
      control.closePopup();
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
    forma.addEventListener("submit", function (e) {
      e.preventDefault();

      const bookId = book.currentEditId;
      // Добавляем новую книгу
      //  book.add();
      console.log("Added new book to array");

      if (bookId) {
        book.saveEditedBook();
        console.log("Редактирование завершено");
      } else {
        book.add();
        console.log("Добавлена новая книга");
      }

      control.closePopup(); // Используем control для вызова метода closePopup
    });
  },
};

export { control };
