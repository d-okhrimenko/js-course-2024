const htmlElement = document.querySelector("#booksList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");
//Inputs:
const titleInput = bookForm.titleInput;
const titleExistsError = document.querySelector("#titleExistsError");

const authorInput = bookForm.authorInput;

const yearInput = bookForm.yearInput;
const yearError = document.querySelector('#yearError');

const genreInput = bookForm.genreInput;

const formError = document.querySelector("#formError");
//buttons:
const saveButton = bookForm.saveButton;
const clearButton = bookForm.clearButton;


let render = () => {
    booksList.renderWithTemplate(bookObject.bookCollection, htmlElement, template);
};

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
    let invalidElements = bookForm.querySelectorAll(".invalid");
    if (invalidElements.length > 0) {
        e.preventDefault();
    }
    else {
        let book = {
            title: titleInput.value,
            author: authorInput.value,
            year: yearInput.value,
            genre: genreInput.value,
        }
        if (editId) {
            bookObject.edit(editId, book);
            clearForm();
        } else {
            bookObject.add(book);
            clearForm();
        }
    }
    render();
});

function isTitleUnique() {
    if (bookObject.findBookByTitle(titleInput.value) && editId === null) {
        titleExistsError.innerHTML = "The title already exists.";
        titleExistsError.style.display = "block";
        return false;
    }
    titleExistsError.style.display = 'none';
    return true;
};

function isYearValid() {
    const year = parseInt(yearInput.value);
    if (isNaN(year) || year < 1450 || year > new Date().getFullYear()) {
        yearError.innerHTML = "The year value is invalid.";
        yearError.style.display = "block";
        return false;
    }
    yearError.style.display = 'none';
    return true;
};

function isElementValid(element) {
    element.classList.remove("valid");
    element.classList.remove("invalid");
    formError.style.display = 'none';

    if (element === titleInput && element.value.length > 0 && isTitleUnique()) {
        element.classList.add("valid");
    } else if (element === yearInput && element.value.length > 0 && isYearValid()) {
        element.classList.add("valid");
    } else if ((element === authorInput || element === genreInput) && element.value.length > 0) {
        element.classList.add("valid");
    } else {
        element.classList.add("invalid");
        formError.innerHTML = "Fill the form.";
        formError.style.display = "block";
    }
};

bookForm.addEventListener("change", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    bookForm.querySelectorAll("input").forEach(element => {
        isElementValid(element)
    });
};

function clearForm() {
    editId = null;
    bookForm.querySelectorAll("input").forEach(element => {
        element.value = '';
    });
    bookForm.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
    });
    // validateForm();
};

function remove(id) {
    bookObject.remove(id);
    render();
};

let editId = null;

function edit(id) {
    const editBook = bookObject.findBook(id);
    editId = editBook.id;
    titleInput.value = editBook.title;
    authorInput.value = editBook.author;
    yearInput.value = editBook.year;
    genreInput.value = editBook.genre;
    render();
};

render();