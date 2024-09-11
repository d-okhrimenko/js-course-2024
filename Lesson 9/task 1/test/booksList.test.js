// booksList.test.js

// Імпортуємо функцію render для тестування
const booksList = require('../js/view');

// Імітуємо DOM-елемент для тестів
document.body.innerHTML = '<section id="books" class="books"></section>';

// Масив книг для тестування
const books = [
  {
    title: "1984",
    author: "Джордж Орвелл",
    year: 1949,
    genre: "Антиутопія",
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Дж. К. Роулінг",
    year: 1997,
    genre: "Фентезі",
  },
];

// Опис тестів
describe("booksList.render", () => {
  it("повинен рендерити книги у DOM", () => {
    // Знаходимо контейнер для рендерингу
    const booksContainer = document.querySelector("#books");

    // Викликаємо функцію рендерингу
    booksList.render(books, booksContainer);

    // Перевіряємо, чи кількість дітей контейнера відповідає кількості книг
    expect(booksContainer.children.length).toBe(books.length);

    // Перевіряємо, чи перша книга рендериться з правильними даними
    const firstBook = booksContainer.children[0];
    expect(firstBook.querySelector("h2").textContent).toBe("1984");
    expect(firstBook.querySelector("h3").textContent).toBe("Джордж Орвелл");
    expect(firstBook.querySelector("p:nth-of-type(1)").textContent).toBe("Рік видання: 1949");
    expect(firstBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Антиутопія");

    // Перевіряємо, чи друга книга рендериться з правильними даними
    const secondBook = booksContainer.children[1];
    expect(secondBook.querySelector("h2").textContent).toBe("Гаррі Поттер і філософський камінь");
    expect(secondBook.querySelector("h3").textContent).toBe("Дж. К. Роулінг");
    expect(secondBook.querySelector("p:nth-of-type(1)").textContent).toBe("Рік видання: 1997");
    expect(secondBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Фентезі");
  });
});

