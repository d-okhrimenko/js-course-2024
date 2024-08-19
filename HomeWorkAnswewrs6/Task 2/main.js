let orderList = ["ItemA", "ItemB", "ItemC"];

console.log(orderList);

function addItem(name) {
    orderList.push(name);
}

function removeItem(name) {
    for (let i = 0; i < orderList.length; i++) {
        if (name == orderList[i]) {
            orderList.splice(i, 1);
        }
    }
}

function showOrder() {
    for (let i = 0; i < orderList.length; i++) {
        console.log((i + 1) + ". " + orderList[i])
    }
}

let action;

do {
    action = prompt("What do you want to do? Add item, remove item or show all order list?")

    if (action == "add") {
        let itemName = prompt("Input item name, which you want to add");
        addItem(itemName);
    } else if (action == "remove") {
        let itemName = prompt("Input item name, which you want to remove");
        removeItem(itemName);
    } else if (action == "show") {
        alert("Look into console")
        showOrder();
    } else if (action != null || action != "") {
        break
    } else {
        alert("You have inputed something wrong. Try again.")
    }
} while (action != null || action != "");