const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");
const bookFormElements = document.querySelectorAll("#bookForm input");

const title = document.querySelector("#titleInput");
const author = document.querySelector("#authorInput");
const year = document.querySelector("#yearInput");
const genre = document.querySelector("#genreInput");
const imgInput = document.querySelector("#imgInput");

// bookList.render(library.books, html)

let editId = null;

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  genreInput.value = "";
  imgInput.value = "";

  bookFormElements.forEach((element) => {
    element.classList.remove("valid");
    element.classList.remove("invalid");
  });
}

function render() {
  bookList.renderWithTemplate(library.books, html, template);
}

function isDuplicateBook(newBook) {
  const newBookTitleLower = newBook.title.toLowerCase();
  return library.books.some(
    (book) => book.title.toLowerCase() === newBookTitleLower
  );
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let imgBook = "";

  if (imgInput.files.length > 0) {
    const file = imgInput.files[0];
    imgBook = URL.createObjectURL(file);
  } else if (editId !== null) {
    imgBook = library.find(editId).imgBook;
  } else {
    imgBook = `./img/default.jfif`;
  }

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    imgBook: imgBook,
  };

  if (isDuplicateBook(book)) {
    alert("Ця книга вже існує в бібліотеці");
    return;
  }

  if (editId === null) {
    library.add(book);
  } else {
    library.update(editId, book);
    editId = null;
  }
  clearForm();
  render();
  alert("Книга успішно додана до бібліотеки");
});

function remove(id) {
  library.remove(id);
  render();
}

function edit(id) {
  const book = library.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();

bookFormElements.forEach((element) => {
  element.addEventListener("input", function () {
    validateElement(element);
  });
});

function validateElement(element) {
  element.classList.remove("valid");
  element.classList.remove("invalid");

  if (element.checkValidity()) {
    element.classList.add("valid");
  } else {
    element.classList.add("invalid");
  }
}
