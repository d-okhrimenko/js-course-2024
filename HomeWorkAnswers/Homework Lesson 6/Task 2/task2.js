let itemsToBuy = [];

function addItemToArray() {
	let itemInput = document.getElementById("itemAdd");
	let item = itemInput.value;
	if (item === "") {
		alert("Please enter an ITEM!");
	} else {
		itemsToBuy.push(item);
		displayItems();
	}
	document.getElementById("itemAdd").value = "";
}

function deleteItemFromArray() {
	let itemName = document.getElementById("itemDelete").value;

	if (itemName === "" || !itemsToBuy.includes(itemName)) {
		alert("Please enter existing ITEM from LIST!");
	}

	for (let i = 0; i < itemsToBuy.length; i++) {
		if (itemsToBuy[i] === itemName) {
		itemsToBuy.splice(i, 1);
		displayItems();
		} 
	}
	document.getElementById("itemDelete").value = "";
}

function displayItems() {
	document.getElementById("itemsOutput").innerText = itemsToBuy.join(", ");
}

function clearAllItems() {
	itemsToBuy = [];
	displayItems();
}

document.getElementById("addItemButton").addEventListener("click", addItemToArray);
document.getElementById("deleteItemButton").addEventListener("click", deleteItemFromArray);
document.getElementById("clearButton").addEventListener("click", clearAllItems);
