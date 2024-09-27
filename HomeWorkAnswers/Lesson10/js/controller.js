const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

let editId = null;

function render() {
  bList.renderWithTemplate(listBook.books, html, template);
}

//input
let titleInput = document.querySelector("#titleInput");
let authorInput = document.querySelector("#authorInput");
let yearInput = document.querySelector("#yearInput");
let genreInput = document.querySelector("#genreInput");

const form = document.forms[0];

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let flag = true;
  listBook.books.forEach((book) => {
     if (book.title == form.bookTitle.value) flag = false;
  });

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (flag) {
    if (editId == null) {
      listBook.add(book);
    } else {
      listBook.update(editId, book);
      editId = null;
    }
  }
  else 
     alert("Книга з таким заголовком вже є")
  render();
});

function remove(id) {
  listBook.remove(id);
  render();
}

function edit(id) {
  const book = listBook.find(id);

  editId = book.id;
  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
  render();
}

render();
