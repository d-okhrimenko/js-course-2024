"use strict";
//* -- main.js
import { StudentManagement } from "./student-management.js";
import { closePopup, openAddPopup } from "./additional-functions.js";

openAddPopup(); // открыть попап с формой для добавления студентов

closePopup("btn"); // закрыть попап при клики на ок у попапи

closePopup(); // закрыть попап ДОДАВАННЯ СТУДЕНТІВ при клікі на крестик

// Создание экземпляра класса StudentManagement
const studentManagement = new StudentManagement();

// функція додавання до масиву студентів нових студентів клік на кнопку ДОДАТИ
studentManagement.startCreateItemStudent();

// виклик метода renderArrStudents через экземпляр класса отрисовать список студентов
studentManagement.getRendarAllStudents(); // вивод списку студентів

// приховати список студентів клік на СХОВАТИ ВСІХ
studentManagement.hideRendarAllStudents();

// функція фільтрації студентів по ай ді
studentManagement.searchInputId();

// функція видалення студентів по ай ді
studentManagement.deleteOnId();

// фильтрація по прізвищу та по імені
//studentManagement.initializeSearchByName();
