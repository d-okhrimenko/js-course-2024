let shoppingList = [];

function addProduct(item) {
    shoppingList.push(item);
    alert(`${item} додано до списку покупок.`);
}

function removeProduct(item) {
    shoppingList = shoppingList.filter(
        (currentItem) => currentItem !== item
    );
    alert(`${item} було видалено зі списку покупок.`);
}

function showCurrentList() {
    if (shoppingList.length === 0) {
        alert("Ваш список покупок порожній.");
    } else {
        alert("Ваш список покупок:" + shoppingList.join(", "));
    }
}
while (true) {
    const userChoise = prompt(
        "що ти хочеш робити (добвити, видалити, показати список, вийти)"
    ).toLowerCase();

    if (userChoise === "добвити") {
        const nameProduct = prompt(
            "Введіть назву елемента, який ви хочете додати:"
        );
        addProduct(nameProduct);
    } else if (userChoise === "видалити") {
        const nameProduct = prompt(
            "Введіть назву елемента, який потрібно видалити:"
        );
        removeProduct(nameProduct);
    } else if (userChoise === "показати список") {
        showCurrentList();
    } else if (userChoise === "вийти") {
        alert("Вихід з програми.");
        break;
    } else {
        alert(
            "Недійсна дія. Будь ласка, введіть 'добвити', 'видалити', 'показати', 'вийти'."
        );
    }
}