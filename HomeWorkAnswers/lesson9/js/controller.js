const htmlElement = document.querySelector("#bookList");
const htmlTemplate = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");
// const buttonForm = document.querySelector("#buttonForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

// buttonForm.addEventListener("submit", function (e) {
bookForm.addEventListener("submit", function (e) {
  e.preventDefault;
  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };
  if (editId == null) {
    bookList.addBook(book);
  } else {
    bookList.updateBook(book, editId);
    editId = null;
  }
  render();
});

function render() {
  bookRender.renderWithTemplate(bookList.books, htmlElement, htmlTemplate);
}
// function add(book) {
//   bookList.addBook(book);
//   render();
// }
function remove(id) {
  bookList.removeBook(id);
  render();
}

function update(id) {
  const book = bookList.findBook(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}
render();
