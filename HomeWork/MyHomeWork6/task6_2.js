let shoppingList = [];

while (true) {
    let ask = chooseAction();
    if (ask === 1) {
        addProduct();
    } else if (ask === 2) {
        removeProdact();
    } else {
        listProducts();
    }

    let exit = prompt('Бажаєте продовжити');
    if (exit !== 'так') break;
}

function addProduct() {
    const value = prompt('Введіть нвзву товару');
    shoppingList.push(value);
}
function removeProdact() {
    const value = prompt('Введіть нвзву товару');
    const index = isValue(value);
    if (index) {
        shoppingList.splice(index, 1);
    } else {
        alert('товара не знайдено');
    }
}

function listProducts(value, index) {
    shoppingList.forEach((value, index) => {
        console.log(`Товар ${index + 1}:   ${value}`);
    });
}

function isValue(value) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] === value) {
            return i;
        }
    }
}

function chooseAction() {
    while (true) {
        let value = +prompt('Виберить дію: \n 1:  додати товар \n 2:  видалити товар \n 3:  вивести список');
        let isValid = value === 1 || value === 2 || value === 3;
        if (isValid) return value;
    }
}