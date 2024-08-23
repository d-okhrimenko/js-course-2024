// Масив для зберігання списку покупок
let shoppingList = [];

// Функція для додавання товару до списку
function addItem(item) {
  shoppingList.push(item);
  alert(`${item} added to the list.`);
}

// Функція для видалення товару зі списку
function removeItem(item) {
  const index = shoppingList.indexOf(item);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    alert(`${item} removed from the list.`);
  } else {
    alert(`${item} not found in the list.`);
  }
}

// Функція для виведення поточного списку покупок
function showList() {
  if (shoppingList.length === 0) {
    alert("The shopping list is empty.");
  } else {
    const listItems = shoppingList.join("\n");
    alert(`Shopping List:\n${listItems}`);
  }
}

// Прив'язка функцій до кнопок
document.getElementById("addItemButton").addEventListener("click", function () {
  const item = document.getElementById("itemInput").value.trim();
  if (item) {
    addItem(item);
    document.getElementById("itemInput").value = "";
    updateListUI();
  }
});

document
  .getElementById("removeItemButton")
  .addEventListener("click", function () {
    const item = document.getElementById("itemInput").value.trim();
    if (item) {
      removeItem(item);
      document.getElementById("itemInput").value = "";
      updateListUI();
    }
  });

document.getElementById("showListButton").addEventListener("click", showList);

// Функція для оновлення інтерфейсу списку покупок
function updateListUI() {
  const list = document.getElementById("shoppingList");
  list.innerHTML = "";
  shoppingList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
}
