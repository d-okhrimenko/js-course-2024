let shoppingList = []

function addCommodity(commodity) {
    shoppingList.push(commodity)
}

function deleteCommodity(commodity) {
    let index = shoppingList.indexOf(commodity)
    shoppingList.splice(index, 1)
}

function showCommodity() {
    alert(shoppingList)
}

function getOperation() {
    let operation = prompt("Вибаріть дію. Доступні дії: додавання товару, видалення товару, виведення списку");
    if (operation === "додавання товару") {
        let commodity = prompt("Введіть товар який хочете додати:")
        addCommodity(commodity)
    } else if (operation === "видалення товару") {
        let commodity = prompt("Введіть товар який хочете видалити:")
        deleteCommodity(commodity)
    } else if (operation === "виведення списку") {
        showCommodity()
    }
}
getOperation()