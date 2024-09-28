let goods = ["lipstick", "mascara", "eyeshadow"];

// function to add item
function addItem(items, item) {
    items.push(item);
}

// function to remove item
function removeItem(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    } else {
        alert("Item not found in the list.");
    }
}

// function to view list of items
function viewList(items) {
    if (items.list === 0) {
        alert("The list is currently empty.");
    } else {
        alert(`List of items ${items.join(", ")}`);
    }
}

while (true) {
    let action = prompt("choose the action: 'add the item', 'remove the item', 'see the list of the items' or 'exit'").toLowerCase();

    if (action === 'exit') {
        break;
    }

    let userItem = prompt("Put the name of the item");

    switch(action) {
        case 'add the item':
            addItem(goods, userItem);
            console.log(`List with the added item: ${goods}`);
            alert(`Item ${userItem} has been added to the list`);
            break;
           
        case 'remove the item':
            removeItem(goods, userItem);
            console.log(`List with the removed item: ${goods}`);
            alert(`Item ${userItem} has been removed from the list`);
            break;
            
        case 'see the list of the items':
            viewList(goods);
            break;
            
        default:
            alert("Invalid action. Please, choose again.")
    }
}



