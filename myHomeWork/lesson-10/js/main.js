"use strict";
import { book } from "./book.js";
import { control } from "./control.js";

// рендер списка книг на сторінку
book.render();

// закрыть попап с формой при клике на крестик
control.clickOnCross();

// открыть попап с формой при клике на кнопку додати книгу
control.openPopupClickBtnAddBook();

// добавить книгу в массив
control.addBookToArr();

// удаление книги
book.addEventListenersForRemowe();

// редактировать книгу
book.addEventListenersForEdit();
