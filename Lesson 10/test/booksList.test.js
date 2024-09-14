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
    const booksContainer = document.querySelector("#books");
    booksList.render(books, booksContainer);

    // Перевірка кількості рендерених книг
    expect(booksContainer.children.length).toBe(books.length);

    // Перевірка рендерингу першої книги
    const firstBook = booksContainer.children[0];
    expect(firstBook.querySelector("h2").textContent).toBe("1984");
    expect(firstBook.querySelector("h3").textContent).toBe("Джордж Орвелл");
    expect(firstBook.querySelector("p:nth-of-type(1)").textContent).toBe("Рік видання: 1949");
    expect(firstBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Антиутопія");

    // Перевірка рендерингу другої книги
    const secondBook = booksContainer.children[1];
    expect(secondBook.querySelector("h2").textContent).toBe("Гаррі Поттер і філософський камінь");
    expect(secondBook.querySelector("h3").textContent).toBe("Дж. К. Роулінг");
    expect(secondBook.querySelector("p:nth-of-type(1)").textContent).toBe("Рік видання: 1997");
    expect(secondBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Фентезі");
  });

  it("повинен працювати з порожнім масивом", () => {
    const booksContainer = document.querySelector("#books");
    booksList.render([], booksContainer);

    // Перевіряємо, що контейнер порожній
    expect(booksContainer.children.length).toBe(0);
  });

  it("повинен обробляти книги з неповними даними", () => {
    const incompleteBooks = [
      { title: "Книга без автора", year: 2000, genre: "Фантастика" },
      { title: "Книга без року", author: "Автор", genre: "Фантастика" },
      { title: "Книга без жанру", author: "Автор", year: 2020 },
    ];

    const booksContainer = document.querySelector("#books");
    booksList.render(incompleteBooks, booksContainer);

    // Перевіряємо, що всі книги все одно рендеряться
    expect(booksContainer.children.length).toBe(incompleteBooks.length);

    // Перевірка рендерингу першої книги
    const firstBook = booksContainer.children[0];
    expect(firstBook.querySelector("h2").textContent).toBe("Книга без автора");
    expect(firstBook.querySelector("p:nth-of-type(1)").textContent).toBe("Рік видання: 2000");
    expect(firstBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Фантастика");

    // Перевірка рендерингу другої книги
    const secondBook = booksContainer.children[1];
    expect(secondBook.querySelector("h2").textContent).toBe("Книга без року");
    expect(secondBook.querySelector("h3").textContent).toBe("Автор");
    expect(secondBook.querySelector("p:nth-of-type(2)").textContent).toBe("Жанр: Фантастика");
  });
});


