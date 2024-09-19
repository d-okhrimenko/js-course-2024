console.log('index.html');

const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector('#bookForm');

let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let yearInput = document.querySelector('#yearInput');
let genreInput = document.querySelector('#genreInput');

function render() {
  bookList.renderWithTemplate(allBooks.books, html, template);
}

let editId = null;

bookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value
  };

  if(editId) {
    allBooks.update(editId, book);
    editId = null;
  } else {
    allBooks.add(book);
  }

  render();
})

function remove(id) {
  allBooks.remove(id);
  render();
}

function edit(id) {
  let book = allBooks.find(id);

  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();

