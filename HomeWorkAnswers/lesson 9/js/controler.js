const output = document.querySelector('#book-list');
const template = document.querySelector('#template').innerHTML;

// form
const bookForm = document.querySelector('#bookForm');
const form = document.querySelector('#form');

// inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');

// btn
const newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
  form.classList.remove('none');
  form.classList.add('view');
  newBookBtn.classList.add('none');
  newBookBtn.classList.toggle;
});

let editId;

function render() {
  booksList.render(catalog.books, output, template);
}

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (!editId) {
    catalog.add(book);
  } else {
    catalog.update(editId, book);
    editId = '';
  }

  e.target.reset();

  render();
});

function remove(id) {
  catalog.remove(id);
  render();
}

function edit(id) {
  const book = catalog.find(id);

  editId = id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
}

render();
