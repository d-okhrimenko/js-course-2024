const booksForm = document.querySelector("#booksForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;
let element = document.querySelector("#books");

async function render() {
  booksView.render(booksModel.books, element);
}

booksForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    booksModel.add(book);
  } else {
    booksModel.update(editId, book);
    editId = null;
  }

  render();
});

function remove(id) {
  booksModel.remove(id);
  render();
}

function edit(id) {
  const book = booksModel.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

async function init() {
  await booksModel.fetchBooks(); // Завантаження книжок із JSON-файлу
  render();
}

document.addEventListener('DOMContentLoaded', init);
