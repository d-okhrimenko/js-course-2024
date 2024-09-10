const selectors = {
  addBookForm: document.querySelector('#addBookForm'),
  bookListContainer: document.querySelector('#bookList'),
  bookTitleInput: document.querySelector('#bookTitleInput'),
  bookAuthorInput: document.querySelector('#bookAuthorInput'),
  bookYearInput: document.querySelector('#bookYearInput'),
  bookGenreInput: document.querySelector('#bookGenreInput'),
};

let editId = null;

selectors.addBookForm.addEventListener('submit', handleSubmit);

function render() {
  bookList.render(books.items, selectors.bookListContainer);
}

function handleSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const book = {
    title: form.elements.title.value,
    author: form.elements.author.value,
    year: form.elements.year.value,
    genre: form.elements.genre.value,
  };

  if (!editId) {
    books.add(book);
  } else {
    books.update(editId, book);
    editId = null;
  }
  render();

  form.reset();
}

function remove(id) {
  // alert(id);
  books.remove(id);
  render();
}

function edit(id) {
  const book = books.findById(id);

  editId = book.id;

  selectors.bookTitleInput.value = book.title;
  selectors.bookAuthorInput.value = book.author;
  selectors.bookYearInput.value = book.year;
  selectors.bookGenreInput.value = book.genre;
}

render();
