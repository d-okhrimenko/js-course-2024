// Books data
const booksObj = {
  books: [
    {
      id: 1,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
    },
    {
      id: 2,
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
    },
    {
      id: 3,
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
    },
    {
      id: 4,
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
    },
    {
      id: 5,
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
    },
  ],
  lastId: 5,

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },
  remove(id) {
    let index = this.books.findIndex(x => x.id == id);
    this.books.splice(index, 1);
  },
  update(id, book) {
    let index = this.books.findIndex(x => x.id == id);
    this.books[index] = book;
  },
  find(id) {
    let index = this.books.findIndex(x => x.id == id);
    return this.books[index];
  },
};

// Generate HTML
const bookList = {
  /*display(books, element) {
    books.forEach(book => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
      section.insertAdjacentHTML("beforeend", `<h3>${book.author}</h3>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);
      element.appendChild(section);
    });
  },*/
  displayWithTemplate(books, element, template) {
    let html = "";
    books.forEach((book) => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  },
};

// Display HTML on the page
let html = document.querySelector("#book-list");
// bookList.display(books, html);
let template = document.querySelector("#template").innerHTML;
let contactForm = document.querySelector("#contactForm");

let editId = null;

function display() {
  bookList.displayWithTemplate(booksObj.books, html, template);
}

// inputs
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");

// Add book
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    booksObj.add(book);
  } else {
    booksObj.update(editId, book);
    editId = null;
  }

  // Clear the form inputs after adding/updating
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  genreInput.value = "";

  display();
});

// remove book
function remove(id) {
  booksObj.remove(id);
  display();
}
// edit book
function edit(id) {
  const book = booksObj.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
}

display();
