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
