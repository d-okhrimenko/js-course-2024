let shoppingList = []; 


function addItem(item) {
    shoppingList.push(item);
    console.log(`${item} додано до списку покупок.`);
}


function removeItem(item) {
    let index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(`${item} видалено зі списку покупок.`);
    } else {
        console.log(`${item} не знайдено у списку покупок.`);
    }
}


function displayList() {
    if (shoppingList.length === 0) {
        console.log("Список покупок порожній.");
    } else {
        console.log("Список покупок:");
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}


function chooseAction() {
    let action = prompt("Оберіть дію: 'додати', 'видалити' або 'переглянути список'. Введіть 'вихід' для завершення:");
    return action.toLowerCase();
}


function executeAction(action) {
    if (action === 'додати') {
        let item = prompt("Введіть назву товару для додавання:");
        addItem(item);
    } else if (action === 'видалити') {
        let item = prompt("Введіть назву товару для видалення:");
        removeItem(item);
    } else if (action === 'переглянути список') {
        displayList();
    } else if (action === 'вихід') {
        console.log("Завершення роботи програми.");
        return false;
    } else {
        console.log("Невірна команда. Спробуйте ще раз.");
    }
    return true;
}

while (true) {
    let action = chooseAction();
    if (!executeAction(action)) {
        break;
    }
}
