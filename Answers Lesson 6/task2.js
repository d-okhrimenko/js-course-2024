let shoppingList = [];
let productAdd;
let delProduct;
document.querySelector("#btnaddItem").onclick = function getProduct(productAdd) {
    productAdd = prompt("Введіть назву товару для додання");
    shoppingList.push(productAdd);
    console.log(shoppingList.join());
}

document.querySelector("#btndelItem").onclick = function delProduct(productDel) {
    if (shoppingList.length>0) {
    productDel = prompt("Введіть назву товару для видалення");
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] == productDel)
            shoppingList.splice(i, 1);
    }
}
else {
    alert("Ваш список порожній");
}
console.log(shoppingList.join());
}

document.querySelector("#btnDisplayList").onclick = function displayList() {
    if (shoppingList.length > 0) {
        alert(shoppingList.join("\n"));
    } else {
        alert("Ваш список порожній");
    }
}
