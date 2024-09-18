let shoppingList = ["хліб", "молоко", "яйця"];

function addItem(item) {
    shoppingList.push(item);
    console.log(`Товар "${item}" додано до списку.`);
}

function removeItem(item) {
    const index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(`Товар "${item}" видалено зі списку.`);
    } else {
        console.log(`Товар "${item}" не знайдено.`);
    }
}

function showList() {
    if (shoppingList.length === 0) {
        console.log("Список покупок порожній.");
    } else {
        console.log("Ваш список покупок:");
        shoppingList.forEach((item, index) => {
            const listElement = document.getElementById("shopping-list");
            listElement.innerHTML = "<h3>Список покупок:</h3>";
            shoppingList.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                listElement.appendChild(listItem);
            });
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function shoppingManager() {
    let action;
    do {
        action = prompt(
            "Виберіть дію: \n1 - Додати товар \n2 - Видалити товар \n3 - Показати список \n0 - Вийти"
        );
        switch (action) {
            case "1":
                let itemToAdd = prompt("Введіть назву товару для додавання:");
                addItem(itemToAdd);
                break;
            case "2":
                let itemToRemove = prompt(
                    "Введіть назву товару для видалення:"
                );
                removeItem(itemToRemove);
                break;
            case "3":
                showList();
                break;
            case "0":
                console.log("Завершення роботи.");
                break;
            default:
                console.log("Невірний вибір. Спробуйте ще раз.");
        }
    } while (action !== "0");
}

document.getElementById("btn").addEventListener("click", shoppingManager);
