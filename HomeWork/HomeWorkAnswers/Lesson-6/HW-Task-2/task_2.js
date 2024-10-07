let shoppingList = [];

        let addItemToList = item => {
            shoppingList.push(item);
            alert(`${item} додано до списку товарів.`);
        }

        let removeItem = item => {
            let index = shoppingList.indexOf(item);
            if (index !== -1) {
                shoppingList.splice(index, 1);
                alert(`${item} видалено зі списку.`);
            } else {
                alert(`Товар "${item}" не знайдено у списку.`);
            }
        }

        let showList = () => {
            if (shoppingList.length === 0) {
                alert("Список покупок порожній.");
            } else {
                alert("Поточний список покупок:\n" + shoppingList.join(", "));
            }
        }

        let shoppingApp =() =>{
            while (true) {
                let action = prompt("Оберіть дію: додати (add), видалити (remove), показати список (show) або завершити (exit)").toLowerCase();

                if (action === "add") {
                    let itemToAdd = prompt("Введіть назву товару для додавання у список");
                    if (itemToAdd) {
                        addItemToList(itemToAdd)
                    } else {
                        alert("Некоректна назва товару.");
                    }
                } else if (action === "remove") {
                    let itemToRemove = prompt("Введіть назву товару для видалення зі списку");
                    if (itemToRemove) {
                        removeItem(itemToRemove)
                    } else {
                        alert("Некоректна назва товару.");
                    }
                } else if (action === "show") {
                    showList();
                } else if (action === "exit") {
                    alert("Дякуємо за користування додатком.");
                    break;
                } else {
                    alert("Некоректна дія. Будь ласка, оберіть: add, remove, show або exit.");
                }
            }
        }

        shoppingApp();