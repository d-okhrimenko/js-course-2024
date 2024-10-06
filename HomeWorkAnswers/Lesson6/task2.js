// Написати програму, яка працює зі списком покупок: додає нові товари, видаляє наявні та виводить список товарів на екран.
const products = [];
const firstMessage = 'Введіть число, що відповідає дії: \n 1. Додати товар \n 2. Видалити товар \n 3. Вивести список товарів \n 4. Завершити'
let isContinue = true;

while(isContinue) {
    getAction();
}

function getAction () {
    let action = Number(getUserChoise(firstMessage));
    if(action === 1) {
        let product = getUserChoise('Введіть назву товару');
        addProduct(product);
    } else if (action === 2) {
        if(products.length === 0) {
            alert('Видалення неможливе! Список товарів порожній');
        } else {
            let product = getUserChoise('Введіть назву товару');
        removeProduct(product);
        }
    } else if (action === 3) {
        if (products.length === 0) {
            alert('Список товарів порожній')
        } else {
           
            displayList()
        }
    } else if (action === 4) {
        alert ('Роботу завершено!')
        isContinue = false;
    } else {
        alert ('оберіть число від 1 до 4, що відповідає дії');
    }
}

function getUserChoise(message) {
    let choise = prompt(message);
    return choise
}

function addProduct (product) {
    products.push(product);

}

function removeProduct (name) {
    const product = products.find(el => el === name);
    if(!product) {
        alert('Такого товару немає у списку')
    } else {
        const index = products.indexOf(product);
        products.splice(index, 1);
    }
    
}

function displayList () {
    let productsStr = products.join('; \n');
    alert(productsStr)
}



