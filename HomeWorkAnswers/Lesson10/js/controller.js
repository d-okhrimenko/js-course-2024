let element = document.querySelector("#books");

const booksForm = document.querySelector("#booksForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = false;
let elementId;

function render() {
  booksView.render(booksList.books, element);
}

booksForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId) {
    booksList.update(elementId, book);
    editId = false;
  } else {
    booksList.add(book);
  }

  render();
});

function remove(id) {
  booksList.remove(id);
  render();
}

function edit(id) {
  const book = booksList.find(id);

  editId = true;
  elementId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();
