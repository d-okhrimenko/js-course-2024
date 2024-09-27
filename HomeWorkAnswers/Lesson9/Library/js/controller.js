const htmlElement = document.querySelector("#booksList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");
//Inputs:
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const yearInput = document.querySelector('#yearInput');
const genreInput = document.querySelector('#genreInput');
//buttons:
const saveButton = document.querySelector("#saveBtn");
const clearButton = document.querySelector("#clearBtn");

let render = () => {
    booksList.renderWithTemplate(bookObject.bookCollection, htmlElement, template);
    enableButtons();
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
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
    render();
});

function enableButtons() {
    if (titleInput.value === '' || authorInput.value === '' ||
        yearInput.value === '' || genreInput.value === '') {
        saveButton.disabled = true;
        clearButton.disabled = true;
    } else {
        saveButton.disabled = false;
        clearButton.disabled = false;
    }
}
bookForm.addEventListener("keyup", function (e) {
    e.preventDefault();
    enableButtons();
});

function clearForm() {
    editId = null;
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
    genreInput.value = '';
}

function remove(id) {
    bookObject.remove(id);
    render();
}

let editId = null;

function edit(id) {
    const editBook = bookObject.findBook(id);
    editId = editBook.id;
    titleInput.value = editBook.title;
    authorInput.value = editBook.author;
    yearInput.value = editBook.year;
    genreInput.value = editBook.genre;
    render();
}

render();