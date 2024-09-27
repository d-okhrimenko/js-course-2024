const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");


let editId = null;

function render() {
  bookList.renderWithTemplate(libBooks.books, html, template);
}

// Перевірка на дублікат під час введення даних у поле title
titleInput.addEventListener("input", function () {
  const titleValue = titleInput.value;

  // Використання методу для перевірки наявності дубліката
  if(libBooks.checkDuplicate(titleValue, editId)) {
    titleInput.setCustomValidity("Книга з такою назвою вже існує.");
  } else {
    titleInput.setCustomValidity(""); // Очищення повідомлення, якщо дубліката немає
  }
});

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    libBooks.add(book);
  } else {
    libBooks.update(editId, book);
    editId = null;
  }

  render();
  bookForm.reset(); // Очищаємо форму після додавання або редагування
});

function remove(id) {
  libBooks.remove(id);
  render();
  bookForm.reset();
}

function edit(id) {
  const book = libBooks.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();