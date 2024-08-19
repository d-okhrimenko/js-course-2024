"use strict";
import listPointsModule from "./listPointsModule.js";

listPointsModule.renderListPoints(); // рендер на сторінці
listPointsModule.addPointsToList(); // додавання баллів
// откриваю попап для додавання балів тільки відкриваю попап (навіщо так зробив поки не розумію)
function getPoints() {
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", function () {
    listPointsModule.openPopup();
  });
}
getPoints();

// функція для откриття попапів з показом середній результат
function handleGetAverageResult() {
  const averageScoreBtn = document.getElementById("average-score"); // кнопка середній бал
  averageScoreBtn.addEventListener("click", () => {
    listPointsModule.getAverageScore(); // функція середній бал
  });
}
handleGetAverageResult();

// функція для откриття попапів з показом найвищий результату
function handleGetHighestResult() {
  const highestBtn = document.getElementById("max-score"); // кнопка найвищий бал
  highestBtn.addEventListener("click", () => {
    listPointsModule.getHighestScore();
  });
}
handleGetHighestResult();
// функція для откриття попапів з показом найнижчого результату
function handleGetLowestResult() {
  const lowestBtn = document.getElementById("min-score");
  lowestBtn.addEventListener("click", () => {
    listPointsModule.getLowestScore();
  });
}
handleGetLowestResult();
