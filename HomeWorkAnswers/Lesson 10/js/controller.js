const section = document.querySelector("#bookList");
bookList.render(books, section);

const showBtn = () => {
  section.classList.replace("hide", "show");
};

const hideBtn = () => {
  section.classList.replace("show", "hide");
};

const bookForm = document.querySelector("#bookForm");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const isTitleValid = validateTitle();
  const isYearValid = validateYear();

  if (!isTitleValid || !isYearValid) {
    return;
  }

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    bookManager.add(book);
  } else {
    bookManager.update(editId, book);
    editId = null;
  }

  alert("Form submitted");

  bookList.render(bookManager.books);
  bookForm.reset();
});

function remove(id) {
  bookManager.remove(id);
  bookList.render(bookManager.books);
}

function edit(id) {
  const book = bookManager.find(id);

  editId = id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  bookList.render(bookManager.books);
}

bookList.render(bookManager.books);

const titleError = document.querySelector("#titleError");

titleError.addEventListener("input", function () {
  validateTitle();
});

titleError.addEventListener("invalid", function (e) {
  e.preventDefault();
});

function validateTitle() {
  const titleValue = titleInput.value.trim();

  titleError.style.display = "none";
  titleInput.classList.remove("invalid");
  titleInput.classList.remove("valid");

  if (bookManager.checkTitle(titleValue)) {
    titleInput.classList.add("invalid");
    titleError.style.display = "inline";
    return false;
  } else {
    titleInput.classList.add("valid");
    return true;
  }
}

const yearError = document.querySelector("#yearError");

yearInput.addEventListener("input", function () {
  validateYear();
});

yearInput.addEventListener("invalid", function (e) {
  e.preventDefault();
});

function validateYear() {
  const yearValue = yearInput.value;
  const currentYear = new Date().getFullYear();
  yearError.style.display = "none";
  yearInput.classList.remove("invalid");
  yearInput.classList.remove("valid");

  if (yearValue >= 1450 && yearValue <= currentYear) {
    yearInput.classList.add("valid");
    return true;
  } else if (yearValue === "") {
    yearInput.classList.add("invalid");
    yearError.style.display = "inline";
    yearError.textContent = "The year field cannot be empty";
    return false;
  } else {
    yearInput.classList.add("invalid");
    yearError.style.display = "inline";
    return false;
  }
}
