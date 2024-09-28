// Books data
const books = [
  { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
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

// Generate HTML
const bookList = {
  display(books, element) {
    books.forEach((book) => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
      section.insertAdjacentHTML("beforeend", `<h3>${book.author}</h3>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);
      element.appendChild(section);
    });
  },
};

// Display HTML on the page
let html = document.querySelector("#book");
bookList.display(books, html);
