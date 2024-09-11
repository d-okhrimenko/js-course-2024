// async.js

// Анонімна асинхронна функція, що виконується одразу після оголошення
(async () => {
  try {
    // Виконуємо запит до файлу books.json, щоб отримати дані про книги
    const response = await fetch("api/books.json");
    const books = await response.json(); // Парсимо відповідь у формат JSON

    // Використовуємо селектор, щоб знайти контейнер для книг на сторінці
    const element = document.querySelector("#books");
    if (element) {
      // Викликаємо метод рендеру, щоб відобразити книги в контейнері
      booksList.render(books, element);
    } else {
      console.error("Контейнер для книг не знайдено");
    }
  } catch (error) {
    // Обробка помилок при завантаженні даних
    console.error("Помилка при завантаженні даних книг:", error);
  }
})();