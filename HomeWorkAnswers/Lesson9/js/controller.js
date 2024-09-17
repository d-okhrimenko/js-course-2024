const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

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
}

function render() {
  bookList.renderWithTemplate(library.books, html, template);
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

  if (editId === null) {
    library.add(book);
  } else {
    library.update(editId, book);
    editId = null;
  }
  clearForm();
  render();
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
