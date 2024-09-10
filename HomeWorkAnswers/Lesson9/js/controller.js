let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;

const bookForm = document.querySelector("#bookForm");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const genre = document.querySelector("#genre");

let editId = null;

function render() {
  bookList.renderWithTemplate(booksList.books, html, template);
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    booksList.add(book);
  } else {
    booksList.update(editId, book);
    editId = null;
  }

  render();
});

function remove(id) {
  booksList.remove(id);
  render();
}

function edit(id) {
  const book = booksList.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();
