// HOMEWORK TASK 1

const studentScores = [];
let studentScore = document.querySelector("#studentScore");
let message = document.querySelector("#showScores");
let error = document.querySelector("#error");
let averageScore = document.querySelector("#averageScore");
let maxScore = document.querySelector("#maxScore");
let minScore = document.querySelector("#minScore");

let addScores = () => {
  if (validScore(studentScore.value)) {
    studentScores.push(studentScore.value);
    resetInput();
    showMessage();
    showAverageScore();
    showMaxScore(studentScores);
    showMinScore(studentScores);
  } else {
    resetInput();
    showError("Введіть коректний бал від 0 до 100");
  }
};

let removeLastScore = () => {
  if (studentScores.length > 0) {
    studentScores.pop();
    resetInput();
    showMessage();
  }
  if (studentScores.length > 0) {
    showAverageScore();
    showMaxScore(studentScores);
    showMinScore(studentScores);
  } else {
    averageScore.innerHTML = 0;
    maxScore.innerHTML = 0;
    minScore.innerHTML = 0;
    showError("Більше немає значень для видалення");
  }
};

let validScore = (score) =>
  score !== "" &&
  !isNaN(score) &&
  score >= 0 &&
  score <= 100 &&
  Number.isInteger(+score);

let resetInput = () => (studentScore.value = "");

let showMessage = () =>
  (message.innerHTML = `Введені бали: ${studentScores.join(", ")}`);

let showError = (mes) => {
  error.innerHTML = `${mes}`;
  setTimeout(() => {
    error.innerHTML = "";
  }, 3000);
};

let showAverageScore = () => {
  let sum = studentScores.reduce((acc, curVal) => acc + +curVal, 0);
  let average =
    studentScores.length > 0 ? (sum / studentScores.length).toFixed(1) : 0;

  return (averageScore.innerHTML = `${average}`);
};

let showMaxScore = (arr) => (maxScore.innerHTML = Math.max(...arr.map(Number)));
let showMinScore = (arr) => (minScore.innerHTML = Math.min(...arr.map(Number)));

document.querySelector("#addScore").onclick = addScores;
document.querySelector("#removeScore").onclick = removeLastScore;


// HOMEWORK TASK 2

// реалізація, мабуть, не дуже відповідає умовам поставленої задачі ... але побачила це якось так, а потім уважніше прочитала завдання :))
// Масив поки залишила, хоча зараз він тут наче і не потрібен


const shoppingArr = [];
const shoppingList = document.querySelector("#shoppingList");
let inputItem = document.querySelector("#inputItem");

let addGoods = () => {
  if (inputItem.value) {
    shoppingArr.push(inputItem.value.trim());
    showGoods();
  }

  inputItem.value = "";
};

let showGoods = () => {
  const newItem = document.createElement("li");
  newItem.className = "shopping-item";
  const itemText = document.createElement("p");
  itemText.innerHTML = inputItem.value;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-item";
  deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/>
      </svg>
    `;

  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  shoppingList.appendChild(newItem);

  deleteButton.onclick = () => deleteGoods(itemText);
};

let clearGoods = () => {
  shoppingArr.length = 0;
  shoppingList.innerHTML = "";
};

let deleteGoods = (itemText) => {
  itemText.classList.toggle("crossed-out");
};

document.querySelector("#addGoods").onclick = addGoods;
document.querySelector("#clearGoods").onclick = clearGoods;
