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
selectors.bookTitleInput.addEventListener('input', validateTitle);
selectors.bookAuthorInput.addEventListener('input', validateAuthor);
selectors.bookYearInput.addEventListener('input', validateYear);
selectors.bookGenreInput.addEventListener('input', validateGenre);

function render() {
  bookList.render(books.items, selectors.bookListContainer);
}

function handleSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const isFormValid = validateAddBookForm();

  if (!isFormValid) {
    return;
  }

  const book = {
    title: form.elements.title.value.trim(),
    author: form.elements.author.value.trim(),
    year: form.elements.year.value,
    genre: form.elements.genre.value.trim(),
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

function validateAddBookForm() {
  const isTitleValid = validateTitle();
  const isAuthorValid = validateAuthor();
  const isYearValid = validateYear();
  const isGenreValid = validateGenre();

  return isTitleValid && isAuthorValid && isYearValid && isGenreValid;
}

function validateTitle() {
  const normalizedTitle = selectors.bookTitleInput.value.trim().toLowerCase();
  selectors.bookTitleInput.setCustomValidity('');

  if (books.items.some(({ title }) => title.toLowerCase() === normalizedTitle)) {
    selectors.bookTitleInput.setCustomValidity('Книга з такою назвою вже існує');
  } else if (normalizedTitle === '') {
    selectors.bookTitleInput.setCustomValidity('Назва книги не може бути порожньою');
  }

  selectors.bookTitleInput.reportValidity();
  return selectors.bookTitleInput.checkValidity();
}

function validateAuthor() {
  const author = selectors.bookAuthorInput.value.trim();
  selectors.bookAuthorInput.setCustomValidity('');

  if (!author) {
    selectors.bookAuthorInput.setCustomValidity("Ім'я автора не може бути порожнім");
  }

  selectors.bookAuthorInput.reportValidity();
  return selectors.bookAuthorInput.checkValidity();
}

function validateYear() {
  const year = Number(selectors.bookYearInput.value);
  const currentYear = new Date().getFullYear();
  selectors.bookYearInput.setCustomValidity('');

  if (!selectors.bookYearInput.value) {
    // Більшість кастомних валідацій не мають особливого сенсу за рахунок HTML валідації форм. Тип імпуту намбер
    selectors.bookYearInput.setCustomValidity('Рік видання не може бути порожнім');
    // } else if (isNaN(year)) {
    //   selectors.bookYearInput.setCustomValidity('Рік видання має бути числом.');
  } else if (year < 1450 || year > currentYear) {
    selectors.bookYearInput.setCustomValidity(`Рік видання має бути в діапазоні від 1450 до ${currentYear}`);
  }

  selectors.bookYearInput.reportValidity();
  return selectors.bookYearInput.checkValidity();
}

function validateGenre() {
  const genre = selectors.bookGenreInput.value.trim();
  selectors.bookGenreInput.setCustomValidity('');

  if (!genre) {
    selectors.bookGenreInput.setCustomValidity('Жанр не може бути порожнім.');
  }

  selectors.bookGenreInput.reportValidity();
  return selectors.bookGenreInput.checkValidity();
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
