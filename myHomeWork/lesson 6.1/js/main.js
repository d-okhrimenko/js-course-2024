"use strict";
//*----------
import productListModule from "./productListModule.js";
import addProductModule from "./addProductModule.js";
import filterProductModule from "./filterProductModule.js";
import removeElementModule from "./removeElementModule.js";
//*-----------
// Инициализация модулей
addProductModule.getProductValue(); // додавання продуктів на сторінку
productListModule.renderProducts(); // рендер продуктів на сторінці
filterProductModule.initFilter(); // Инициализация фильтрации продуктов
removeElementModule.handleBtnClick();
removeElementModule.closePopup();
