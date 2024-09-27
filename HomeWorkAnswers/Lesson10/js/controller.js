const html = document.querySelector('#bookList');
const template = document.querySelector('#template').innerHTML;
const bookForm = document.querySelector('#bookForm');
const notification = document.querySelector('#notification');

// inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');

let editId = null;

function render() {
  bookList.renderWithTemplate(bookCatalog.books, html, template);
}

function validateForm() {
  const form = bookForm;
  let isValid = true;

  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const year = form.year.value.trim();
  const genre = form.genre.value.trim();
  const currentYear = new Date().getFullYear();
  const messages = [];

  if (title === '') {
    messages.push('Назва книги не може бути порожньою');
    isValid = false;
  }

  if (
    bookCatalog.books.some(
      book =>
        book.title.toLowerCase() === title.toLowerCase() && book.id !== editId
    )
  ) {
    messages.push('Книга з такою назвою вже існує');
    isValid = false;
  }

  if (author === '') {
    messages.push("Ім'я автора не може бути порожнім");
    isValid = false;
  }

  if (
    year === '' ||
    isNaN(year) ||
    year <= 0 ||
    year < 1450 ||
    year > currentYear
  ) {
    messages.push('Рік має бути числом між 1450 і поточним роком');
    isValid = false;
  }

  if (genre === '') {
    messages.push('Жанр не може бути порожнім');
    isValid = false;
  }

  if (!isValid) {
    messages.forEach(msg => showNotification(msg));
  }

  return isValid;
}

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
  yearInput.value = '';
  genreInput.value = '';
}

function showNotification(message) {
  notification.textContent = message;
  notification.classList.add('show', 'added');

  setTimeout(() => {
    notification.classList.remove('show', 'added');
  }, 3000);
}

bookForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: parseInt(yearInput.value),
    genre: genreInput.value
  };

  if (validateForm()) {
    if (editId == null) {
      bookCatalog.add(book);
    } else {
      bookCatalog.update(editId, book);

      editId = null;
    }

    render();
    clearForm();
    showNotification('Книга успішно збережена');
  }
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

  titleInput.focus();
  window.scrollTo(0, 0);

  render();
}

render();
