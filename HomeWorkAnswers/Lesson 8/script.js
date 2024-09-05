let bookArray = [
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
  {
    title: "Гра престолів",
    author: "Джордж Р. Р. Мартін",
    year: 1996,
    genre: "Фентезі",
  },
  {
    title: "Старий і море",
    author: "Ернест Хемінгуей",
    year: 1952,
    genre: "Пригодницький роман",
  },
  {
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: 1967,
    genre: "Фантастика",
  },
];

function showBook(arr) {
  const booksList = document.querySelector("#books");

  arr.forEach((book) => {
    const booksContainer = document.createElement("div");
    booksContainer.classList.add("book");
    booksContainer.style.background = "burlywood";
    booksContainer.style.borderRadius = "20px";
    booksContainer.style.padding = "10px 20px";
    booksContainer.style.margin = "0  0 20px 0";

    const booksTitle = document.createElement("h2");
    booksTitle.textContent = `"${book.title}"`;
    booksContainer.appendChild(booksTitle);

    const booksAuthor = document.createElement("p");
    booksAuthor.textContent = `Автор: ${book.author}`;
    booksContainer.appendChild(booksAuthor);

    const booksYear = document.createElement("p");
    booksYear.textContent = `Рік видання: ${book.year}`;
    booksContainer.appendChild(booksYear);

    const booksGenre = document.createElement("p");
    booksGenre.textContent = `Жанр: ${book.genre}`;
    booksContainer.appendChild(booksGenre);

    booksList.appendChild(booksContainer);
  });
}

showBook(bookArray);
