const html = document.querySelector('#bookList');
const template = document.querySelector('#template').innerHTML;
const bookForm = document.querySelector('#bookForm');

// inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');

let editId = null;

function render() {
  bookList.renderWithTemplate(bookCatalog.books, html, template);
}

bookForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value
  };

  if (editId == null) {
    bookCatalog.add(book);
  } else {
    bookCatalog.update(editId, book);
    editId = null;
  }

  render();
});

function remove(id) {
  bookCatalog.remove(id);
  render();
}

function edit(id) {
  const book = bookCatalog.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();
