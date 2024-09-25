let productList = ["Apples", "Bananas", "Oranges"];

document.querySelector("#add").onclick = function() {
    addItemToList(productList, prompt("Enter the item name for adding to list"));
    showProductList();
}

document.querySelector("#remove").onclick = function() {
    removeItemFromList(productList, prompt("Enter the item name for removing from list"));
    showProductList();
}

function removeItemFromList(array, itemName) {
    const index = array.indexOf(itemName);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        alert(`Incorrect input: element '${itemName}' not found`);
    }
}

function addItemToList(array, itemName) {
    if (itemName) {
        array.push(itemName);
    }
}

function showProductList() {
    let listText = getProductListText(productList);
    document.querySelector("#list").innerHTML = listText;
    alert(listText);
}

function getProductListText(products) {
    let result = "You basket contains: \n";
    products.forEach((item, i) => {
        result += `${i + 1}. ${item} \n`;
    });
    result += `Total count: ${products.length}`;
    return result;
}
