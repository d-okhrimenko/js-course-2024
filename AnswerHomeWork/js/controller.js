const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const openBtn = document.querySelector("#open");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector("#close");
const addBookForm = document.querySelector("#form");
const inputs = document.querySelectorAll("input");

let updateId = null;

openBtn.addEventListener("click", toggleBackdrop);
closeBtn.addEventListener("click", toggleBackdrop);
addBookForm.addEventListener("submit", submitForm);

render();

function toggleBackdrop() {
  backdrop.classList.toggle("is-hidden");
}

function submitForm(e) {
  e.preventDefault();
  const book = {};
  book.title = e.target.children[0].value;
  book.author = e.target.children[1].value;
  book.year = e.target.children[2].value;
  book.genre = e.target.children[3].value;
  book.id = booksLibrary.lastId + 1;

  if (updateId == null) {
    booksLibrary.add(book);
  } else {
    booksLibrary.update(updateId, book);
    updateId = null;
  }

  toggleBackdrop();
  render();
}

function render() {
  bookList.render(booksLibrary.books, html, template);
}

function remove(id) {
  booksLibrary.remove(id);
  render();
}

function edit(id) {
  const book = booksLibrary.find(id);
  updateId = book.id;

  inputs[0].value = book.title;
  inputs[1].value = book.author;
  inputs[2].value = book.year;
  inputs[3].value = book.genre;

  toggleBackdrop();
  render();
}
