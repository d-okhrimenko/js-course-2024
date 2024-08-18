"use strict";

const productListModule = (function () {
  let arrProduct = ["молоко", "хліб", "чай", "кавун"];

  // получение отфильтрованных продуктов
  function getFilteredProducts(value) {
    return arrProduct.filter((el) => el.toLowerCase().includes(value));
  }

  return {
    // вывод в консоль массива
    showArrProduct: function () {
      console.log(arrProduct);
    },
    // добавление продукта
    addProductToArr: function (el) {
      arrProduct.push(el);
    },
    // рендер всех продуктов
    renderProducts: function () {
      const ul = document.querySelector(".list__list");
      ul.innerHTML = ""; // Очистить список перед рендерингом
      arrProduct.forEach((product) => {
        const li = document.createElement("li");
        li.classList.add("list__item");
        li.textContent = product;
        ul.appendChild(li);
      });
    },

    // загальна функція яка отримує елемент з массиву знаходить індекс та видаляє
    searchElement: function (element) {
      // Очищаем текущий список
      const ul = document.querySelector(".list__list");
      ul.innerHTML = "";
      // фільтрую елемент у массиві за допомогою методу filter
      const findElement = getFilteredProducts(element);
      // якщо елемент у массиві відсутній
      if (findElement.length === 0) {
        const ul = document.querySelector(".list__list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.classList.add("list__item");
        li.textContent = "елемент відсутній у массиві";
        console.log("єлемент відсутній у массиві");
      } else {
        // Перебираем отфильтрованные продукты и создаем li для каждого
        findElement.forEach((product) => {
          const li = document.createElement("li");
          li.classList.add("list__item");
          li.textContent = product;
          ul.appendChild(li);
        });
      }
      // знаходю індекс елемента який потрібно видалити наприклад перший знайдений у массиві
      // const indexElement = findElement[0];
      // const index = getProductIndex(indexElement);
      // console.log(index);

      // видаляю
      //removeProductFromArr(index);
    },
    // поиск индекса продукта
    getProductIndex: function (el) {
      const str = el.toLowerCase();
      return arrProduct.findIndex((word) => word.toLowerCase() === str);
    },
    // удаление продукта по индексу
    removeProductFromArr: function (index) {
      arrProduct.splice(index, 1); // Удаляем продукт из массива по индексу
    },
  };

  // загальна функція яка отримує елемент з массиву та видаляє його
})();

productListModule.showArrProduct();

export default productListModule;

//"молоко", "хлеб", "чай"
