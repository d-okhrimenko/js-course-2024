let listOfProducts = [];

        // Функція для додавання товару
        function addProduct(name) {
            listOfProducts.push(name);
        }

        // Функція для видалення товару       
        function deleteProduct(name) {
            listOfProducts = listOfProducts.filter(value => value !== name);
        }

        // Функція для виведення поточного списку товарів     
        function showList(array) {
            if (listOfProducts.length === 0) {
                alert("В списку відсутні товари")
            }
            else {
                let output = document.querySelector("#output");
                output.innerHTML = `Ваш список товарів: ${listOfProducts.join()}`
            }
        }

        // Обробка події натискання кнопки додавання товару 
        document.querySelector("#btnAdd").onclick = function () {
            let product = prompt("Введіть назву товару, який ви хочете додати");
            addProduct(product);
            alert(`Товар ${product} додано до списку`);
        }

        // Обробка події натискання кнопки видалення товару   
        document.querySelector("#btnDel").onclick = function () {
            let product = prompt("Введіть назву товару, який ви хочете видалити");
            if (listOfProducts.includes(product)) {
                alert(`Товар ${product} видалено зі списку`);
                deleteProduct(product);
            }
            else alert(`Товару ${product} немає у списку`);
        }

        // Обробка події натискання кнопки виведення поточного списку товарів
        document.querySelector("#btnList").onclick = function () {
            showList(listOfProducts);
        }

        // Обробка події натискання кнопки завершення 
        document.querySelector("#exit").onclick = function () {
            listOfProducts = [];
            let output = document.querySelector("#output");
            output.innerHTML = "Роботу завершено!";
        }