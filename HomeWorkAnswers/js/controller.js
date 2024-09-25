const selectors = {
  addBookForm: document.querySelector('#addBookForm'),
  bookListContainer: document.querySelector('#bookList'),
  bookTitleInput: document.querySelector('#bookTitleInput'),
  bookAuthorInput: document.querySelector('#bookAuthorInput'),
  bookYearInput: document.querySelector('#bookYearInput'),
  bookGenreInput: document.querySelector('#bookGenreInput'),
  errorTitleValidate: document.querySelector('#js-titleError'),
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
  const { title, author, year, genre } = form.elements;
  const isFormValid = validateAddBookForm();

  if (!isFormValid) {
    return;
  }

  const book = {
    title: title.value.trim(),
    author: author.value.trim(),
    year: year.value,
    genre: genre.value.trim(),
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
  const validateElement = selectors.bookTitleInput;
  const errorElement = selectors.errorTitleValidate;

  const normalizedTitle = validateElement.value.trim().toLowerCase();
  const isBookExist = books.items.some(({ title }) => title.toLowerCase() === normalizedTitle);

  validateElement.classList.remove('valid');
  validateElement.classList.remove('invalid');
  errorElement.style.display = 'none';
  errorElement.textContent = '';
  validateElement.setCustomValidity('');

  if (isBookExist) {
    validateElement.classList.add('invalid');
    errorElement.style.display = 'inline';
    errorElement.textContent = 'Книга з такою назвою вже існує';
    validateElement.setCustomValidity('Дублювання назви книги');
  } else if (normalizedTitle === '') {
    validateElement.classList.add('invalid');
    errorElement.style.display = 'inline';
    errorElement.textContent = 'Введіть назву книги';
    validateElement.setCustomValidity('Назва книги не може бути порожньою');
  }

  validateElement.reportValidity();
  return validateElement.checkValidity();
}

function validateAuthor() {
  const validateElement = selectors.bookAuthorInput;
  const author = validateElement.value.trim();
  validateElement.setCustomValidity('');

  if (!author) {
    validateElement.setCustomValidity("Ім'я автора не може бути порожнім");
  }

  validateElement.reportValidity();
  return validateElement.checkValidity();
}

function validateYear() {
  const validateElement = selectors.bookYearInput;
  const year = Number(validateElement.value);
  const currentYear = new Date().getFullYear();
  validateElement.setCustomValidity('');

  if (!validateElement.value) {
    // Більшість кастомних валідацій не мають особливого сенсу за рахунок HTML валідації форм. Тип імпуту намбер
    validateElement.setCustomValidity('Рік видання не може бути порожнім');
    // } else if (isNaN(year)) {
    //   validateElement.setCustomValidity('Рік видання має бути числом.');
  } else if (year < 1450 || year > currentYear) {
    validateElement.setCustomValidity(`Рік видання має бути в діапазоні від 1450 до ${currentYear}`);
  }

  validateElement.reportValidity();
  return validateElement.checkValidity();
}

function validateGenre() {
  const validateElement = selectors.bookGenreInput;
  const genre = validateElement.value.trim();
  validateElement.setCustomValidity('');

  if (!genre) {
    validateElement.setCustomValidity('Жанр не може бути порожнім');
  }

  validateElement.reportValidity();
  return validateElement.checkValidity();
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
