const ShoppingListManager = (() => {
    let shoppingList = [];

    const addItem = (itemName) => {
        if (itemName) {
            shoppingList.push(itemName);
            return true;
        }
        return false;
    };

    const removeItem = (itemName) => {
        const itemIndex = shoppingList.indexOf(itemName);
        if (itemIndex !== -1) {
            shoppingList.splice(itemIndex, 1);
            return true;
        }
        return false;
    };

    const getItems = () => shoppingList;

    return {
        addItem,
        removeItem,
        getItems,
    };
})();

const UIController = (() => {
    const updateShoppingList = (shoppingList) => {
        const shoppingListElement = document.getElementById("shoppingList");
        const emptyMessage = document.getElementById("emptyMessage");

        shoppingListElement.innerHTML = '';

        if (shoppingList.length === 0) {
            emptyMessage.style.display = "block";
        } else {
            emptyMessage.style.display = "none";
            shoppingList.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item}`;
                shoppingListElement.appendChild(listItem);
            });
        }
    };

    const toggleShoppingList = () => {
        const shoppingWindow = document.getElementById("shoppingWindow");
        if (shoppingWindow.style.display === "none" || shoppingWindow.style.display === "") {
            shoppingWindow.style.display = "block";
        } else {
            shoppingWindow.style.display = "none";
        }
    };

    return {
        updateShoppingList,
        toggleShoppingList,
    };
})();

const handleAddItem = () => {
    const itemInput = document.getElementById("itemInput").value.trim();
    if (ShoppingListManager.addItem(itemInput)) {
        alert(`${itemInput} додано до списку.`);
    } else {
        alert("Будь ласка, введіть назву товару.");
    }
    document.getElementById("itemInput").value = '';
    UIController.updateShoppingList(ShoppingListManager.getItems());
};

const handleRemoveItem = () => {
    const itemInput = document.getElementById("itemInput").value.trim();
    if (ShoppingListManager.removeItem(itemInput)) {
        alert(`${itemInput} видалено зі списку.`);
    } else {
        alert("Товар не знайдено у списку або не введено назву товару.");
    }
    document.getElementById("itemInput").value = '';
    UIController.updateShoppingList(ShoppingListManager.getItems());
};

const toggleShoppingList = () => {
    UIController.toggleShoppingList();
};
