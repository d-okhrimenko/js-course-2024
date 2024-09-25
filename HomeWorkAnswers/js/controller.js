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

bookForm.titleInput.addEventListener("change", function (event) {
  const titleValue = event.target.value;

  if (!titleValue) {
    bookForm.titleInput.setCustomValidity("Назва книги не може бути порожньою");
  }
  else if (booksList.books.some((book) => book.title === titleValue)) {
    bookForm.titleInput.setCustomValidity("Дублікат книги");
  }
  else {
    bookForm.titleInput.setCustomValidity("");
  }

  bookForm.titleInput.reportValidity();
});

bookForm.authorInput.addEventListener("change", function (event) {
  const authorValue = event.target.value;

  if (!authorValue) {
    bookForm.authorInput.setCustomValidity("Ім'я автора не може бути порожньою");
  } else {
    bookForm.authorInput.setCustomValidity("");
  }

  bookForm.authorInput.reportValidity();
});

bookForm.yearInput.addEventListener("input", function (event) {
  const yearValue = event.target.value;
  const currentYear = new Date().getFullYear();

  if (!yearValue) {
    bookForm.yearInput.setCustomValidity("Рік видання повинен бути вказаний.");
  }
  else if (isNaN(yearValue)) {
    bookForm.yearInput.setCustomValidity("Рік видання повинен бути числом.");
  }
  else if (yearValue < 1450 || yearValue > currentYear) {
    bookForm.yearInput.setCustomValidity(
      `Рік видання повинен бути в діапазоні від 1450 до ${currentYear}.`
    );
  }
  else {
    bookForm.yearInput.setCustomValidity("");
  }

  bookForm.yearInput.reportValidity();
});

bookForm.genreInput.addEventListener("change", function (event) {
  const genreValue = event.target.value;

  if (!genreValue) {
    bookForm.genreInput.setCustomValidity("назва жанру не може бути порожньою");
  } else {
    bookForm.genreInput.setCustomValidity("");
  }

  bookForm.genreInput.reportValidity();
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
