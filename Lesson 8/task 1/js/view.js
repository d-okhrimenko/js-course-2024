// view.js

// Об'єкт, який відповідає за рендеринг списку книг на сторінці
const booksList = {
    /**
     * Функція для рендерингу списку книг
     * @param {Array} array - Масив об'єктів книг
     * @param {HTMLElement} htmlElement - HTML елемент-контейнер, куди будуть додані книги
     */
    render: function (array, htmlElement) {
      // Перебираємо кожну книгу в масиві
      array.forEach((element) => {
        // Створюємо новий div для книги
        let section = document.createElement("div");
        section.classList.add("book"); // Додаємо клас для стилізації
  
        // Створюємо елементи для заголовка, автора, року та жанру
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("h3");
        let bookYear = document.createElement("p");
        let bookGenre = document.createElement("p");
  
        // Заповнюємо елементи текстом з даних книги
        bookTitle.textContent = element.title;
        bookAuthor.textContent = element.author;
        bookYear.textContent = `Рік видання: ${element.year}`;
        bookGenre.textContent = `Жанр твору: ${element.genre}`;
  
        // Додаємо елементи до секції книги
        section.appendChild(bookTitle);
        section.appendChild(bookAuthor);
        section.appendChild(bookYear);
        section.appendChild(bookGenre);
  
        // Додаємо секцію книги до контейнера
        htmlElement.appendChild(section);
      });
    },
  };
  