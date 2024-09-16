const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

// form
const form = document.forms[0];

let editId = null;
let isError = false;

function render() {
  bookView.renderWithTemplate(bookList.books, html, template);
}

function remove(id) {
  bookList.remove(id);
  render();
}

function edit(id) {
  const book = bookList.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();

// // Функція для перевірка на дублікати.
function checkToDuplicates(input) {
  const value = input.value.trim().toLowerCase();
  let len = bookList.books.length;
  for (let i = 0; i < len; i++) {
    if (value === bookList.books[i].title.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Функція для перевірки коректності року в діапазоні 1450 - поточний рік
function validateInputYear(inputYear) {
  const currentYear = new Date().getFullYear();
  const year = parseInt(inputYear.value, 10);

  if (year >= 1450 && year <= currentYear) {
    return true;
  } else {
    return false;
  }
}

// Перевірка на дублікати: перевірити, чи вже є така книга в масиві books.
form.title.addEventListener("change", function (event) {
  if (checkToDuplicates(titleInput)) {
    isError = true;
    alert("Така назва книги вже є в переліку!");
    event.preventDefault();
  } else {
    isError = false;
  }
});

// Перевірка на діапазон значень: рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік.
form.year.addEventListener("change", function (event) {
  if (validateInputYear(yearInput)) {
    console.log("Число");
  } else {
    alert("Рік повинен бути числом в діапазоні з 1450 до поточного року");
    event.preventDefault(); // скасування надсилання форми
  }
});

// Функція очистки форм
function clearForm() {
  document.forms[0].reset();
}

// Додавання або редагування книги
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (isError) {
    alert("Не коректно заповнена інформація");
  } else {
    if (editId == null) {
      bookList.add(book);
      alert("Книгу додано");
    } else {
      bookList.update(editId, book);
      editId = null;
    }
    clearForm();
  }
  render();
});
