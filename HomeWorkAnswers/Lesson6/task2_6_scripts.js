// Завдання 2
// Написати програму, яка працює зі списком покупок:
//додає нові товари, видаляє наявні та виводить список товарів на екран.

let shoppingList = ["Хліб", "Молоко", "Сир"];

document.querySelector("#add_item").onclick = function () {
  addItem();
  clearList();
  let itemsUl = showItemList(shoppingList);
  document.getElementById("list").append(itemsUl);
};
document.querySelector("#delete_item").onclick = function () {
  deleteItem();
  clearList();
  let itemsUl = showItemList(shoppingList);
  document.getElementById("list").append(itemsUl);
};

function addItem() {
  let value = prompt("Введіть назву товару, який ви хочете додати до списку");
  shoppingList.push(value);
}

function deleteItem() {
  let findItem = prompt("Введіть назву товару, який ви хочете видалити");
  const index = shoppingList.indexOf(findItem);
  console.log(index);
  if (index > -1) {
    // only splice array when item is found
    shoppingList.splice(index, 1); // 2nd parameter means remove one item only
  }
  return shoppingList;
}

function showItemList(arr) {
  let ul = document.createElement("ul");
  arr.forEach((elems) => {
    let li = document.createElement("li");
    li.textContent = elems;
    ul.append(li);
  });
  return ul;
}

let itemsUl = showItemList(shoppingList);
document.getElementById("list").append(itemsUl);

function clearList() {
  document.getElementById("list").innerHTML = "";
}
