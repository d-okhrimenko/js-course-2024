let shoppingList = [];

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemName = itemInput.value.trim();

    if (itemName) {
        shoppingList.push(itemName);
        itemInput.value = '';
        updateShoppingList();
        alert(`${itemName} додано до списку.`);
    } else {
        alert("Будь ласка, введіть назву товару.");
    }
}

function removeItem() {
    const itemInput = document.getElementById("itemInput");
    const itemName = itemInput.value.trim();

    if (itemName) {
        const itemIndex = shoppingList.indexOf(itemName);
        if (itemIndex !== -1) {
            shoppingList.splice(itemIndex, 1);
            itemInput.value = '';
            updateShoppingList();
            alert(`${itemName} видалено зі списку.`);
        } else {
            alert("Товар не знайдено у списку.");
        }
    } else {
        alert("Будь ласка, введіть назву товару для видалення.");
    }
}

function toggleShoppingList() {
    const shoppingWindow = document.getElementById("shoppingWindow");

    if (shoppingWindow.style.display === "none" || shoppingWindow.style.display === "") {
        shoppingWindow.style.display = "block";
    } else {
        shoppingWindow.style.display = "none";
    }
}

function updateShoppingList() {
    const shoppingListElement = document.getElementById("shoppingList");
    shoppingListElement.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item}`;
        shoppingListElement.appendChild(listItem);
    });
}