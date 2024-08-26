"use strict";
// тут додаткові функція пов'язані з DOM

// функція відкрити попап при кліки на кнопку ДОДАТИ СТУДЕНТА
function openAddPopup() {
  const btn = document.getElementById("btn-btn");
  btn.addEventListener("click", function () {
    const popupAddStudent = document.getElementById("popup-addStudent");
    popupAddStudent.classList.remove("hidden");
    cleanInput();
    cleanFocusInput();
  });
}

// додавання до масиву студентів
function addStudentToArr(arr, el) {
  arr.push(el);
}

// Функція закриття попапів клік на крестик та кнопку ок
function closePopup(argument) {
  const btnAdd = document.getElementById("btn-add"); // кнопка ОК
  const popupCloseIcon = document.getElementById("popup-close-icon"); // иконка крестик
  let str = argument;
  if (str === "btn") {
    btnAdd.addEventListener("click", function () {
      const popupAddStudent = document.getElementById("popup-addStudent");
      popupAddStudent.classList.add("hidden");
      //console.log("закриваю попап кнопкою ОК");
    });
  } else {
    popupCloseIcon.addEventListener("click", function () {
      const popupAddStudent = document.getElementById("popup-addStudent");
      popupAddStudent.classList.add("hidden");
      cleanInput();
      cleanFocusInput();
      //console.log("закриваю попап крестиком");
    });
  }
}

// функція яка знімає фокус з інпутів
function cleanFocusInput() {
  const nameField = document.getElementById("name");
  const lastNameField = document.getElementById("last-name");
  const ageField = document.getElementById("age");
  const idCodField = document.getElementById("number-id");
  const averageScoreField = document.getElementById("average-score");

  // зняття фокусу з кожного інпуту
  nameField.style.border = "#8e8d8d 2px solid";
  lastNameField.style.border = "#8e8d8d 2px solid";
  ageField.style.border = "#8e8d8d 2px solid";
  idCodField.style.border = "#8e8d8d 2px solid";
  averageScoreField.style.border = "#8e8d8d 2px solid";
  //console.log("Знімаю фокус");
}

// перевірка що у строчці тільки букви (регулярний вираз)
function isOnlyLetters(str) {
  const regex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/u;
  return regex.test(str);
}

// очищаю інпути при клікі на ОК и крестик
function cleanInput() {
  const name = (document.getElementById("name").value = "");
  const lastName = (document.getElementById("last-name").value = "");
  const age = Number((document.getElementById("age").value = ""));
  const idCod = Number((document.getElementById("number-id").value = ""));
  const averageScore = Number(
    (document.getElementById("average-score").value = "")
  );
  console.log("очищаю инпуты");
}
// функція шаблонизатор попапов

function showPopup(message) {
  let textPop = document.querySelector(".popup-warn__text"); // текст попапа
  textPop.textContent = message;

  // показую попап попап
  const popupBody = document.querySelector(".popup-warn"); // тело попапа
  popupBody.classList.remove("hidden");

  // Обрабобка закриття попапа
  closePopupWarn();
}
//функция закритія попапа предупреждения
function closePopupWarn() {
  const popupBtn = document.querySelector(".popup-warn__btn");
  popupBtn.addEventListener("click", () => {
    const popupWarn = document.querySelector(".popup-warn");
    popupWarn.classList.add("hidden"); // Скрываем попап при нажатии кнопки "ok"
  });
}

export {
  openAddPopup,
  closePopup,
  addStudentToArr,
  isOnlyLetters,
  cleanInput,
  showPopup,
  closePopupWarn,
};
