"use strict";

let list = [];
let text = ["товар додано", "товар видалено", "Список покупок", "Оберіть дію (додавання товару, видалення товару, вивести список, завершити)"];

function addProduct(value) {
    list.push(value);
}

function removeProduct(item) {
    list = list.filter((currentItem) => currentItem !== item);
}

function showList() {
    return list.join(", ");
}

while (true) {
    let option = prompt(text[3]).toLowerCase();

    if (option == "додавання товару") {
        let product = prompt("Введіть назву товара, яку треба додати");
        addProduct(product);
        alert(`${product} ${text[0]}`);
    } else if (option == "видалення товару") {
        let product = prompt( "Введіть назву товара, яку треба видалити");
        removeProduct(product);
        alert(`${product} ${text[1]}`);
    } else if (option == "вивести список") {
        let l = showList();
        alert(`${text[2]} ${l}`);
    } else if (option == "завершити") {
        alert("Завершено");
        break;
    } else {
        alert(text[3]);
    }
}