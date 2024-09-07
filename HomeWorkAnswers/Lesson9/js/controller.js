const bookList = document.querySelector('#bookList');
const bookForm = document.querySelector('#bookForm');
const showFormButton = document.querySelector('#showFormButton');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const yearInput = document.querySelector('#year');
const genreInput = document.querySelector('#genre');
const cancelButton = document.querySelector('#cancelButton');
const template = document.querySelector("#template").innerHTML;

let editId = null;

const render = () => View.renderWithTemplate(Model.books, bookList, template);

const handleSubmit = e => {
  e.preventDefault();
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId === null) {
    Model.add(newBook);
  } else {
    Model.update(editId, newBook);
    editId = null;
  }

  render();
  bookForm.reset();
  bookForm.style.display = 'none';
  showFormButton.textContent = 'Додати Книгу';
}

const toggleForm = () => {
if (bookForm.style.display === 'none') {
    bookForm.style.display = 'block';
    showFormButton.textContent = 'Приховати форму';
  } else {
    bookForm.style.display = 'none';
    showFormButton.textContent = 'Додати Книгу';
  }
}

const remove = id => {
  Model.remove(id);
  render();
}

const edit = id => {
  bookForm.style.display = 'block';
  showFormButton.textContent = 'Приховати форму';
  const bookToEdit = Model.find(id);
  editId = bookToEdit.id;
  titleInput.value = bookToEdit.title;
  authorInput.value = bookToEdit.author;
  yearInput.value = bookToEdit.year;
  genreInput.value = bookToEdit.genre;
  render()
}

bookForm.addEventListener('submit', handleSubmit);

showFormButton.addEventListener('click', toggleForm);

cancelButton.addEventListener('click', () => {
  bookForm.reset();
  bookForm.style.display = 'none';
  showFormButton.textContent = 'Додати Книгу';
});

render();
