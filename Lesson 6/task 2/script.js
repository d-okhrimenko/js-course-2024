// Ініціалізація масиву для списку покупок
let shoppingList = [];

// Функція для додавання товару до списку
function addItem(item) {
    if (item && !shoppingList.includes(item)) {
        shoppingList.push(item);
        alert(`Товар "${item}" додано до списку.`);
    } else {
        alert("Товар або вже існує, або введено некоректне значення.");
    }
}

// Функція для видалення товару зі списку
function removeItem(item) {
    const index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        alert(`Товар "${item}" видалено зі списку.`);
    } else {
        alert("Товар не знайдено у списку.");
    }
}

// Функція для виведення поточного списку покупок
function displayList() {
    const listDiv = document.getElementById('shoppingList');
    if (shoppingList.length === 0) {
        listDiv.innerText = "Список покупок порожній.";
    } else {
        listDiv.innerHTML = '<ul>' + shoppingList.map(item => `<li>${item}</li>`).join('') + '</ul>';
    }
}

// Функція для управління списком покупок
function manageShoppingList() {
    let action;
    do {
        action = prompt("Оберіть дію: 'додати', 'видалити', 'показати' або 'вийти'").toLowerCase();
        
        switch(action) {
            case 'додати':
                const addItemName = prompt("Введіть назву товару для додавання:");
                addItem(addItemName);
                break;
                
            case 'видалити':
                const removeItemName = prompt("Введіть назву товару для видалення:");
                removeItem(removeItemName);
                break;
                
            case 'показати':
                displayList();
                break;
                
            case 'вийти':
                alert("Завершення роботи.");
                break;
                
            default:
                alert("Невірна команда. Спробуйте знову.");
                break;
        }
    } while (action !== 'вийти');
}

