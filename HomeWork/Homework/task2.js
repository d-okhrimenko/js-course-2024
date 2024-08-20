// Масив для зберігання списку покупок
let shoppingList = ["хліб", "молоко", "яйця"];

// Функція для додавання товару до списку
function addItem(item) {
    shoppingList.push(item);
    alert(`Товар "${item}" додано до списку покупок.`);
}

// Функція для видалення товару зі списку
function removeItem(item) {
    const index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        alert(`Товар "${item}" видалено зі списку покупок.`);
    } else {
        alert(`Товар "${item}" не знайдено у списку.`);
    }
}

// Функція для виведення поточного списку покупок
function displayList() {
    if (shoppingList.length > 0) {
        alert("Ваш список покупок:\n" + shoppingList.join("\n"));
    } else {
        alert("Ваш список покупок порожній.");
    }
}

// Основна програма
let action;
do {
    action = prompt("Що ви хочете зробити? (додати, видалити, переглянути, вийти)").toLowerCase();

    switch (action) {
        case "додати":
            const itemToAdd = prompt("Введіть назву товару, який хочете додати:");
            addItem(itemToAdd);
            break;
        case "видалити":
            const itemToRemove = prompt("Введіть назву товару, який хочете видалити:");
            removeItem(itemToRemove);
            break;
        case "переглянути":
            displayList();
            break;
        case "вийти":
            alert("Завершення роботи зі списком покупок.");
            break;
        default:
            alert("Невідома дія, спробуйте ще раз.");
    }
} while (action !== "вийти");
