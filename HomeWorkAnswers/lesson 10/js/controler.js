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
const hideFormBtn = document.querySelector('#hide');

let editId;

newBookBtn.addEventListener('click', viewForm);
hideFormBtn.addEventListener('click', hideForm);

function render() {
  booksList.render(catalog, template);
}

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  validateElement(titleInput, '#titleError');
  validateElement(authorInput, '#authorError');
  validateElement(yearInput, '#yearError');
  validateElement(genreInput, '#genreError');

  let invalidElements = document.querySelectorAll('.invalid');

  if (invalidElements.length === 0) {
    let book = {
      title: titleInput.value,
      author: authorInput.value,
      year: yearInput.value,
      genre: genreInput.value,
    };

    if (!editId) {
      catalog.add(book);
    } else {
      console.log(editId);
      catalog.update(editId, book);
      editId = '';
    }

    clearValidStatus();
    e.target.reset();
    render();
  } else {
    e.preventDefault();
  }
});

function clearValidStatus() {
  let clearValid = document.querySelectorAll('.valid');
  clearValid.forEach(item => item.classList.remove('valid'));
}

function remove(id) {
  catalog.remove(id);
  render();
}

function edit(id) {
  const book = catalog.find(id);
  editId = id;

  viewForm();

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
}

function validateElement(element, errorElementSelector) {
  let errorElement = document.querySelector(errorElementSelector);

  element.classList.remove('valid');
  element.classList.remove('invalid');
  errorElement.classList.add('none');

  if (element.value.length > 0) {
    if (element === authorInput || element === genreInput) {
      element.classList.add('valid');
    }

    if (element === titleInput) {
      if (catalog.books.findIndex(item => item.title === element.value) != -1) {
        errorElement.innerHTML = 'This book is already in the catalog';
        errorElement.classList.remove('none');
        element.classList.add('invalid');
      } else {
        element.classList.add('valid');
      }
    }

    if (element === yearInput) {
      if (!Number(element.value)) {
        errorElement.innerHTML = 'The year of publication must be a number';
        errorElement.classList.remove('none');
        element.classList.add('invalid');
      } else if (
        element.value < 1450 ||
        element.value > new Date().getFullYear()
      ) {
        errorElement.innerHTML =
          'The year of publication cannot be less than 1450 or more than the current year.';
        errorElement.classList.remove('none');
        element.classList.add('invalid');
      } else {
        element.classList.add('valid');
      }
    }
  } else {
    errorElement.innerHTML = 'This is a required field';
    errorElement.classList.remove('none');
    element.classList.add('invalid');
  }
}

function viewForm() {
  form.classList.remove('none');
  form.classList.add('view');
  newBookBtn.classList.add('none');
}

function hideForm() {
  form.classList.add('none');
  form.classList.remove('view');
  newBookBtn.classList.remove('none');
}

render();
