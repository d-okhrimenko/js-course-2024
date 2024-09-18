const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm")

const modal = document.getElementById('form-modal');

// inputs
const bookAuthorInput = document.querySelector("#bookAuthorInput");
const bookTitleInput = document.querySelector("#bookTitleInput");
const bookYearInput = document.querySelector("#bookYearInput");
const bookGenreInput = document.querySelector("#bookGenreInput");

// errors validation
const bookAuthorError = document.querySelector("#bookAuthorError");
const bookTitleError = document.querySelector("#bookTitleError");
const bookYearError = document.querySelector("#bookYearError");
const bookGenreError = document.querySelector("#bookGenreError");

let bookId = 0;
let pressedButton = "";


function render() {
    bookstListRender.renderWithTemplate(booksList.books, html, template);
}

function openForm(id) {
    bookId = id;
    pressedButton = "edit";

    clearErrors();

    const book = booksList.find(bookId);
    if (bookId != 1) {
        bookAuthorInput.value = book.author;
        bookTitleInput.value = book.title;
        bookYearInput.value = book.year;
        bookGenreInput.value = book.genre;
    }
    else {
        bookAuthorInput.value = "";
        bookTitleInput.value = "";
        bookYearInput.value = "";
        bookGenreInput.value = "";
    }

    modal.style.display = 'block';

}

function closeForm() {
    pressedButton = "close";
}


function remove() {
    pressedButton = "remove";
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (pressedButton == "remove") {
        if (bookId != 1) {
            booksList.remove(bookId);
        }
        closeForm();
    }
    else if (pressedButton == "edit") {

        if (validateElements()) {
            let book = {
                title: bookTitleInput.value,
                author: bookAuthorInput.value,
                year: bookYearInput.value,
                genre: bookGenreInput.value
            };

            if (bookId == 1) {
                booksList.add(book);
            }
            else {
                booksList.update(bookId, book);
            }
            closeForm();
        }

    } else {
        closeForm();
    }


});

function closeForm() {
    modal.style.display = 'none';
    render();
}

function validateElements() {

    clearErrors();

    let valid = true;
    //Перевірка на порожнє значення: назва книги не повинна бути порожньою.
    const title = bookTitleInput.value.trim();
    if (!title) {
        valid = setErrorText("Назва книги не може бути порожньою.", bookTitleError, bookTitleInput);
    } else if (booksList.findByTitle(title, bookId)) {
        //Перевірка на дублікати: перевірити, чи вже є така книга в масиві books.
        valid = setErrorText("Така назва книги вже існує.", bookTitleError, bookTitleInput);
    }
    //Перевірка на порожнє значення: ім'я автора не повинно бути порожнім.
    if (!bookAuthorInput.value.trim()) {
        valid = setErrorText("Автор не може бути порожнім.", bookAuthorError, bookAuthorInput);
    }

    const year = bookYearInput.value.trim();
    //Перевірка на порожнє значення: рік повинен бути вказаний.
    if (!year) {
        valid = setErrorText("Рік видання не може бути порожнім.", bookYearError, bookYearInput);
    }
    //Перевірка на тип даних: це має бути число.
    if (isNaN(year)) {
        valid = setErrorText("Рік видання має бути числом.", bookYearError, bookYearInput);
    }
    //Перевірка на діапазон значень: рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік.
    const currentYear = new Date().getFullYear();
    if (parseInt(year) < 1450 || parseInt(year) > currentYear) {
        valid = setErrorText(`Рік видання має бути в діапазоні від 1450 до ${currentYear}.`, bookYearError, bookYearInput);
    }

    // Перевірка на порожнє значення: жанр не повинен бути порожнім
    if (!bookGenreInput.value.trim()) {
        valid = setErrorText("Жанр не може бути порожнім.", bookGenreError, bookGenreInput);
    }
    return valid;
}

function setErrorText(textError, innerElement, inputElement) {
    innerElement.innerHTML = textError;
    innerElement.style.display = "block";
    inputElement.classList.add("invalid");
    return false;
}

function clearErrors() {
    bookAuthorError.innerHTML = "";
    bookTitleError.innerHTML = "";
    bookYearError.innerHTML = "";
    bookGenreError.innerHTML = "";

    bookAuthorError.style.display = "none";
    bookTitleError.style.display = "none";
    bookYearError.style.display = "none";
    bookGenreError.style.display = "none";

    bookAuthorInput.classList.remove("invalid");
    bookTitleInput.classList.remove("invalid");
    bookYearInput.classList.remove("invalid");
    bookGenreInput.classList.remove("invalid");


}

render();

