let shoppingList = [];
let value = "";

function addElement(array) {
	value = prompt("Введіть назву товару");

	return array.push(value);
}

function removeElement(array) {
	value = prompt("Введіть назву товару");

	return array.filter(element => element !== value);
}

function printArrayElements(array) {
	alert(array);
}

let action = 0;

do {
	action = getNumericValueIsIntegerFromValue1ToValue2("Введіть дію: 1 (додавання товару), 2 (видалення товару), 3 (виведення списку) або 4 (вихід)", 1, 4);

	switch (action) {
		case 1:
			addElement(shoppingList);
			break;
		case 2:
			shoppingList = removeElement(shoppingList);
			break;
		case 3:
			printArrayElements(shoppingList);
			break;
		default:
			break;
	}
} while (
	action !== 4
)