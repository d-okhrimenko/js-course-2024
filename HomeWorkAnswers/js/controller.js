const html = document.querySelector("#book-List");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
  bookList.renderWithTempl(booksList.books, html, template);
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
