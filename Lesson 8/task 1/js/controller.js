// controller.js

// Контролер, який відповідає за запуск процесу відображення книг

// Додаємо обробник події, який виконається після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
    // Знаходимо контейнер для книг на сторінці
    let element = document.querySelector("#books");
  
    // Перевіряємо, чи контейнер знайдено
    if (element) {
      // Викликаємо метод рендерингу, передаючи масив книг та контейнер
      booksList.render(books, element);
    } else {
      console.error("Контейнер для книг не знайдено");
    }
  });
  