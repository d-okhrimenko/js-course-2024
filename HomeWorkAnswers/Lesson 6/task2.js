let shoppingList = [];
let value = "";

function addElement(array) {
	value = prompt("Введіть назву товару");

	if (value) {
		array.push(value);
	} else {
		alert("Назва товару не може бути пустою!");
	}
}

function removeElement(array) {
	value = prompt("Введіть назву товару");

	if (value) {
		return array.filter(element => element !== value);
	} else {
		alert("Назва товару не може бути пустою!");
		return array;
	}
}

function printElements(array) {
	if (array.length > 0) {
		alert(array.join(", "));
	} else {
		alert("Список покупок пустий!");
	}
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
			printElements(shoppingList);
			break;
		default:
			break;
	}
} while (
	action !== 4
)