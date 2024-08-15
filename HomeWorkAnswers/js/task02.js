let shoppingList = ["чай", "кава", "шоколад", "печиво"];

const showListItems = (array) =>
    alert(`Список покупок: \n${shoppingList.join(", ")}`);

const addItem = (item, array) => array.push(item);

const getItem = () => prompt("Введіть назву елемента");

const delItem = (item, array) => {
    let index = array.indexOf(item);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
};

const getUserInput = () => {
    while (true) {
        let value = prompt(
            "Введіть на вибір: \n1 - додати товар \n2 - видалити товар \n3 - вивести список \nвихід - вийти з програми"
        );
        if (isNaN(value) && value.toLowerCase() === "вихід") return false;
        else value = parseInt(value);
        if (
            !isNaN(value) &&
            value !== "" &&
            value !== null &&
            value > 0 &&
            value <= 3
        )
            return value;
    }
};

function myShoppingList() {
    while (true) {
        let value = getUserInput();
        if (!value) break;
        if (value === 1) addItem(getItem(), shoppingList);
        else if (value === 2) delItem(getItem(), shoppingList);
        else if (value === 3) showListItems(shoppingList);
    }
}
