console.log('index.html');

const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector('#bookForm');

let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let yearInput = document.querySelector('#yearInput');
let genreInput = document.querySelector('#genreInput');

let elements = document.querySelectorAll("[data-val='true']");
let needForUniquenessValidation = true;
let formValid = false;

let countInvalid = 0;

function onSubmitHandler() {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let valid = validateElement(element);
    if(!valid) {
      countInvalid++
    }
  }

  if(countInvalid == 0) {
    formValid = true;
    clearForm();
  }
  countInvalid = 0;
}

function validateElement(element) {
  for (const key in validators) {
    if (Object.hasOwnProperty.call(validators, key) && typeof validators[key] === 'object') {
      if (element.dataset[key]) { 
        const validator = validators[key];
        if(key == 'unique' && needForUniquenessValidation == false) { continue
        }
        if (!validator.isValid(element)) {
          return false; 
        }
      }
    }
  }
  return true;
}

let validators = {};

validators.validate = function (element, message, predicate) {
  let errorLabel = document.querySelector('#' + element.dataset.errorLabel);
  errorLabel.textContent = message;
  errorLabel.style.display = 'none';
  element.classList.remove('invalid');
  element.classList.remove('valid');

  if(typeof predicate == 'function' && predicate()) {
    element.classList.add('valid');
    return true;
  } else {
    element.classList.add('invalid');
    errorLabel.style.display = 'block';
    return false;
  }
}

validators.required = {
  isValid: function(element) {
    let message = element.dataset.required;
    return validators.validate(element, message, () => element.value.length > 0);
  }
}

validators.pattern = {
  isValid: function(element) {
    let message = 'Рік має бути числом та в розумних межах!';
    let regex = new RegExp(element.dataset.pattern);
    let value = parseInt(element.value)
    return validators.validate(element, message, () => regex.test(value) && value > 1450 && value < new Date().getFullYear())
  }
}

validators.unique = {
  isValid: function(element) {
    let message = element.dataset.unique;
    let booksTitles = allBooks.books.map(book => book.title);
    let value = element.value;
    return validators.validate(element, message, () => !booksTitles.includes(value));
  }
}

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
    needForUniquenessValidation = false;
    onSubmitHandler();
    
    if(formValid) {
      needForUniquenessValidation = true;
      allBooks.update(editId, book);
      formValid = false;
      editId = null;

    }
  } else {
    onSubmitHandler();
    if(formValid) {
      allBooks.add(book);
      formValid = false;
    }
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

function clearForm() {
  titleInput.value = '';
  titleInput.classList.remove('valid');
  authorInput.value = '';
  authorInput.classList.remove('valid');
  yearInput.value = '';
  yearInput.classList.remove('valid');
  genreInput.value = '';
  genreInput.classList.remove('valid');
}

render();

