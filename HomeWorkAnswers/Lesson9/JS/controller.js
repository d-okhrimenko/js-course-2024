const bookHtml = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;

const bookForm = document.querySelector("#bookForm");

//inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
  bookList.renderWithTemplate(bookAttributs.books, bookHtml, template);
}

bookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value
  };

  if (editId == null) {
    bookAttributs.add(book);
  } else {
    bookAttributs.update(editId, book);
    editId = null;
  }
  
  render();
})

function remove(id) {
  bookAttributs.remove(id);
  render();
}

function edit(id){
  const book = bookAttributs.find(id);

  editId = book.id;

  titleInput.value = book.title,
  authorInput.value = book.author,
  yearInput.value = book.year,
  genreInput.value = book.genre;

  render();
}

render();