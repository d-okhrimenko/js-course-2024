let shoppingList = [];

// Функция для загрузки начальных данных из JSON
function loadInitialData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            shoppingList = JSON.parse(xhr.responseText);
            displayList();
        }
    };
    xhr.send();
}


// Функция для отображения списка покупок
function displayList1() {
    const listElement = document.getElementById('shopping-list');
    listElement.innerHTML = ''; // Очищаем предыдущий список

    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.style.color = 'white'; // Цвет текста кнопки
        deleteButton.style.backgroundColor = 'red'; // Цвет фона кнопки
        deleteButton.style.border = 'none'; // Убираем рамку
        deleteButton.style.borderRadius = '4px'; // Закругляем углы
        deleteButton.style.cursor = 'pointer'; // Указываем курсор при наведении
        deleteButton.onclick = () => {
            removeItem(index);
        };

        li.appendChild(deleteButton);
        listElement.appendChild(li);
    });
}

// Функция для добавления товара
function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemName = itemInput.value.trim();

    if (itemName === '') {
        document.getElementById('error-message').textContent = 'Будь ласка, введіть назву товару.';
        return;
    }

    shoppingList.push(itemName);
    itemInput.value = '';
    displayList1();
    document.getElementById('error-message').textContent = '';
}

// Функция для удаления товара
function removeItem(index) {
    shoppingList.splice(index, 1);
    displayList();
}

// Обработчик нажатия на кнопку "Додати товар"
document.getElementById('add-button').addEventListener('click', addItem);

// Загрузка начальных данных при инициализации
loadInitialData();

//
// Основной цикл программы
function mainLoop() {
    while (true) {
        const action = prompt("Выберите действие:\n1. Добавить товар\n2. Удалить товар\n3. Вывести список\n4. Выйти");

        switch (action) {
            case "1":
                addItem();
                break;
            case "2":
                removeItem();
                break;
            case "3":
                displayList();
                break;
            case "4":
                alert("Работа программы завершена.");
                return;
            default:
                alert("Некорректный выбор. Попробуйте еще раз.");
        }
    }
}

// Функция для добавления товара
function addItem() {
    const itemName = prompt("Введите название товара:");

    if (itemName) {
        shoppingList.push(itemName);
        displayList();
    }
}

// Функция для удаления товара
function removeItem() {
    const itemName = prompt("Введите название товара для удаления:");

    const index = shoppingList.indexOf(itemName);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        displayList();
    } else {
        alert("Товар не найден в списке.");
    }
}

// Функция для отображения списка покупок
function displayList() {
    alert("Список покупок:\n\n" + shoppingList.join("\n"));
}

// Загрузка начальных данных при инициализации
loadInitialData();

// Запуск основного цикла программы
mainLoop();