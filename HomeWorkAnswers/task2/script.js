let shoppingList = []

function addCommodity() {
    let commodity = prompt("Введіть продукт:")
    shoppingList.push(commodity)
}

function deleteCommodity() {
    let commodity = prompt("Введіть продукт:")
    let index = shoppingList.indexOf(commodity)
    shoppingList.splice(index, 1)
}

function showCommodity() {
    alert(shoppingList)
}