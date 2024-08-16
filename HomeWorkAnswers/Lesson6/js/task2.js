let shoppingList = [];

function addElement(element) {
  element = element.toLowerCase();
  if (!shoppingList.includes(element)) {
    shoppingList.push(element);
  } else {
    alert(`Цей товар вже є в списку!`);
  }
}

function delElement(element) {
  element = element.toLowerCase();
  const ind = shoppingList.indexOf(element);
  if (ind >= 0) {
    shoppingList.splice(ind, 1);
  } else {
    alert(`Такий товар не знайдено!`);
  }
}

function showShoppingList(array) {
  array.sort();
  let result = "<ol>";
  for (const element of array) {
    result = result + "<li>" + element + "</li>";
  }
  result = result + "</ol>";
  let output = document.querySelector("#output");
  output.innerHTML = result;
}

document.querySelector("#btnAdd").onclick = function () {
  let good = document.querySelector("#listElement").value;
  addElement(good);
  document.querySelector("#listElement").value = "";
};

document.querySelector("#btnDel").onclick = function () {
  let good = document.querySelector("#listElement").value;
  delElement(good);
  document.querySelector("#listElement").value = "";
};

document.querySelector("#btnView").onclick = function () {
  showShoppingList(shoppingList);
};
