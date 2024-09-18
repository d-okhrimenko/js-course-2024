let shoppingList = ["молоко", "хліб", "печиво"];

function updateList() {
    const listElement = document.getElementById("shopping-list");
    listElement.innerHTML = "<h3>Список покупок:</h3>";
    shoppingList.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}

function addToList() {
    const newItem = prompt("Введіть назву товара");
    if (newItem) {
        shoppingList.push(newItem);
        updateList();
    } else {
        alert("Ви не ввели назву");
    }
}

function removeFromList() {
    const itemToRemove = prompt("Введіть назву товару для видалення:");
    const index = shoppingList.indexOf(itemToRemove);
    if (index > -1) {
        shoppingList.splice(index, 1);
        updateList();
    } else {
        alert("Товар не знайдено у списку!");
    }
}

function showList() {
    alert("Ваш список покупок:\n" + shoppingList.join("\n"));
}

document.getElementById("add").addEventListener("click", addToList);
document.getElementById("remove").addEventListener("click", removeFromList);
document.getElementById("show").addEventListener("click", showList);

updateList();
