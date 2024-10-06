let shoppingList = [];

function addItem(item) {
  if (item && !shoppingList.includes(item)) {
    shoppingList.push(item);
    updateList();
  } else {
    alert("Товар вже у списку або введення порожнє.");
  }
}

function removeItem(item) {
  const itemIndex = shoppingList.indexOf(item);
  if (itemIndex !== -1) {
    shoppingList.splice(itemIndex, 1);
    updateList();
  } else {
    alert("Товар не знайдено у списку.");
  }
}

function updateList() {
  const shoppingListElement = document.getElementById("shopping-list");
  shoppingListElement.innerHTML = ""; // Очищення списку

  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    shoppingListElement.appendChild(li);
  });
}

document.getElementById("add-button").addEventListener("click", () => {
  const itemInput = document.getElementById("item-input").value.trim();
  addItem(itemInput);
  document.getElementById("item-input").value = ""; // Очищення поля вводу
});

document.getElementById("remove-button").addEventListener("click", () => {
  const itemInput = document.getElementById("item-input").value.trim();
  removeItem(itemInput);
  document.getElementById("item-input").value = ""; // Очищення поля вводу
});
