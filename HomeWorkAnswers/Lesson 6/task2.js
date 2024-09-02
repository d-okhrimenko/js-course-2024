// 1. Створити масив для зберігання списку покупок:
let shoppingList = ["Хліб", "Молоко", "Яйця"]; 

// 2. Створити функцію для додавання товару до списку:
function addItem(item) {
    shoppingList.push(item);
    alert(`${item} додано до списку покупок.`);
}

// 3. Створити функцію для видалення товару зі списку:
function removeItem(item) {
    let index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        alert(`${item} видалено зі списку покупок.`);
    } else {
        alert(`Товар ${item} не знайдено у списку.`);
    }
}

// 4. Створити функцію для виведення поточного списку покупок:
function displayList() {
    if (shoppingList.length === 0) {
        alert("Список покупок порожній.");
    } else {
        alert("Поточний список покупок:\n" + shoppingList.join("\n"));
    }
}

// 5. Запропонувати користувачу вибрати дію:
function getUserAction() {
    return prompt("Що ви хочете зробити? Введіть:\n1 для додавання товару\n2 для видалення товару\n3 для перегляду списку\n4 для виходу");
}

// 6. Реалізувати вибір користувача:
function handleUserAction(action) {
    switch(action) {
        case "1":
            let itemToAdd = prompt("Введіть назву товару, який ви хочете додати:");
            addItem(itemToAdd);
            break;
        case "2":
            let itemToRemove = prompt("Введіть назву товару, який ви хочете видалити:");
            removeItem(itemToRemove);
            break;
        case "3":
            displayList();
            break;
        case "4":
            return false; // Завершення роботи
        default:
            alert("Невірна дія. Спробуйте ще раз.");
    }
    return true; // Продовження роботи
}

// 7. Повторити процес, поки користувач не завершить роботу:
let continueWork = true;
while (continueWork) {
    let userAction = getUserAction();
    continueWork = handleUserAction(userAction);
}

alert("Дякуємо за користування списком покупок!");