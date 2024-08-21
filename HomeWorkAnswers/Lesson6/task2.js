const shoppingList = [];

const addItem = (itemName) => {
    itemName = getStrValue("#addItem");
    if (itemName !== null) return addArrayElement(shoppingList, itemName);
    return null;
}
document.querySelector("#btnAdd").addEventListener("click", displayAddedItem = () => {
    const isItemAdded = addItem();
    clearInput("#addItem");
    if (isItemAdded === null) return showResult(`Enter item name please`, "#addOutput");
    return showResult(`${isItemAdded} was added successfully`, "#addOutput");
});

const removeItem = (itemName) => {
    itemName = getStrValue("#removeItem");
    if (itemName !== null) return removeArrayElementbyName(shoppingList, itemName);
    return null;
}
document.querySelector("#btnRemove").addEventListener("click", displayRemovedItem = () => {
    const isItemRemoved = removeItem();
    clearInput("#removeItem");
    if (isItemRemoved === null) return showResult(`The item not found check spelling and try again`, "#removeOutput");
    return showResult(`${isItemRemoved} was removed successfully`, "#removeOutput");
});

document.querySelector("#btnList").addEventListener("click", displayShopingList = () => {
    const list = displayArrayValues(shoppingList);
    if (list === "") return showResult(`Your shopping list is empty`, "#listOutput");
    return showResult(`${list}`, "#listOutput");
});

//The same shopping list, but via “prompt() with while loop”
document.querySelector("#btnRun").addEventListener("click", () => {
    const shoppingList = [];
    let isRunning = true;

    function getStringValue(message) {
        let value = prompt(message);
        let isValid = value !== "" && value !== null && value.trim() !== "";
        if (isValid) return value.trim();
        return null;
    }

    const addItem = (itemName) => shoppingList.push(itemName);

    const removeItem = (itemName) => {
        const index = shoppingList.indexOf(itemName);
        if (index !== -1) return shoppingList.splice(index, 1)[0];
        return false;
    }

    const displayArrayValues = () => shoppingList.join("\n");

    while (isRunning) {
        const answer = getStringValue(
            `Here is your shopping list\nSelect an option by entering:\na - add items\nr - remove items\nd - display list`
        );

        if (answer === null) {
            isRunning = false;
            console.log(`You've checked out the shopping list.`);
        } else if (answer === "a") {
            let itemName = getStringValue(`To add an item, enter its name:`);
            if (itemName) {
                addItem(itemName);
                console.log(`${itemName} was added successfully.`);
            } else {
                console.log("Invalid item name.");
            }
        } else if (answer === "r") {
            let itemName = getStringValue(`To remove an item, enter its name:`);
            if (itemName) {
                if (removeItem(itemName)) {
                    console.log(`${itemName} was removed successfully.`);
                } else {
                    console.log(`${itemName} was not found. Please check the spelling and try again.`);
                }
            } else {
                console.log("Invalid item name.");
            }
        } else if (answer === "d") {
            if (shoppingList.length > 0) {
                console.log("Your shopping list:\n" + displayArrayValues());
            } else {
                console.log(`Your shopping list is empty.`);
            }
        } else {
            console.log(`Please select a valid option.`);
        }
    }
});
