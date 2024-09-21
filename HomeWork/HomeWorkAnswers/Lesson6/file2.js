// let shoppingList = ["ручка", "олівець", "пенал"];

function addGoods(shoppingList, value) {
    shoppingList.push(value);
    alert("Товар " + value + " додано до списку");
    return console.log(shoppingList);
}

function removeGoods(shoppingList, value) {
    let ind = shoppingList.findIndex(checkGoods);
    function checkGoods(goods) {
        return goods == value;
    }
    shoppingList.splice(ind, 1,);
    alert("Товар " + value + " видалено із списку");
    return console.log(shoppingList);
}

function callback(value, index) {
    console.log(`index ${index} = ${value}`);
}

function startShopping() {
    let shoppingList = [];
    let continueShopping = true;

    while (continueShopping) {
        let action = prompt("Введіть дію: додати товар, видалити товар, вивести список або завершити");
        switch (action) {
            case "додати товар":
                let newGoods = prompt("Введіть новий товар");
                addGoods(shoppingList, newGoods);
                break;

            case "видалити товар":
                let deleteGoods = prompt("Який товар треба видалити?");
                removeGoods(shoppingList, deleteGoods);
                break;
            case "вивести список":
                shoppingList.forEach(callback);
                break;
            case "завершити":
                continueShopping = false;
                break;
        }
    }
}

startShopping();


