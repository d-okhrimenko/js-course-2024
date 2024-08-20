function addGoods(nameGoods) {
    shoppingList.push(nameGoods);
}

function deleteGoods(nameGoods) {
    let goodsIndex = shoppingList.indexOf(nameGoods);
    if (goodsIndex != -1) {
        shoppingList.splice(goodsIndex, 1);
    }
}

function displayShoppingList() {
    shoppingList.forEach(item => {
        console.log(item);
    });
}

function implementationOfUserChoice(userAction) {
    switch (userAction) {
        case "а":
            currentGoods = prompt("Введіть назву товару, який треба додати:");
            addGoods(currentGoods);
            break;
        case "б":
            currentGoods = prompt("Введіть назву товару, який треба видалити:");
            deleteGoods(currentGoods);
            break;
        case "в":
            displayShoppingList();
            break;
        case "г":
            continueShopping = false;
            break;
        default:
            alert("Невірний вибір");
    }
}

let shoppingList = ["сало"];
let currentGoods;
let continueShopping = true;

do {
    let userAction = prompt("Додати товар - натисніть \"а\" \nВидалити товар - натисніть \"б\" \nВивести список товарів - натисніть \"в\" \nДля завершення натисніть \"г\"");
    implementationOfUserChoice(userAction);
} while (continueShopping);
