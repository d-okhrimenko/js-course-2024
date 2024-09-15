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

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);
    element.classList.remove("valid");
    element.classList.remove("invalid");
    errorElement.style.display = "none";
    
    let isValid = true;
    let errorMessage = "";

    if (element.value.trim().length === 0) {
        isValid = false;
        errorMessage = "Це поле не може бути порожнім.";
    } else if (element.id === 'year') {
        const yearNum = Number(element.value);
        const currentYear = new Date().getFullYear();
        if (isNaN(yearNum) || yearNum < 1450 || yearNum > currentYear) {
            isValid = false;
            errorMessage = `Рік видання повинен бути числом між 1450 та ${currentYear}.`;
        }
    } else if (element.id === 'title') {
        const duplicateBook = Model.books.find(book => 
            book.title.toLowerCase() === element.value.toLowerCase() &&
            book.author.toLowerCase() === authorInput.value.toLowerCase() &&
            book.id !== editId
        );
        if (duplicateBook) {
            isValid = false;
            errorMessage = "Книга з такою назвою та автором вже існує.";
        }
    }

    if (isValid) {
        element.classList.add("valid");
    } else {
        element.classList.add("invalid");
        errorElement.textContent = errorMessage;
        errorElement.style.display = "inline";
    }

    return isValid;
}

titleInput.addEventListener("change", () => validateElement(titleInput, "#titleError"));
authorInput.addEventListener("change", () => validateElement(authorInput, "#authorError"));
yearInput.addEventListener("change", () => validateElement(yearInput, "#yearError"));
genreInput.addEventListener("change", () => validateElement(genreInput, "#genreError"));

const handleSubmit = e => {
  e.preventDefault();

  let isValid = true;
  isValid = validateElement(titleInput, "#titleError") && isValid;
  isValid = validateElement(authorInput, "#authorError") && isValid;
  isValid = validateElement(yearInput, "#yearError") && isValid;
  isValid = validateElement(genreInput, "#genreError") && isValid;

  if (!isValid) {
    return;
  }

  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
    year: Number(yearInput.value),
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
  clearErrors();
}

const clearErrors = () => {
    [titleInput, authorInput, yearInput, genreInput].forEach(input => {
        input.classList.remove("valid", "invalid");
        document.querySelector(`#${input.id}Error`).style.display = "none";
    });
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