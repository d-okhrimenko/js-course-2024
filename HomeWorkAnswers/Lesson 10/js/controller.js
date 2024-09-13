// let html = document.querySelector("#bookList");
// let template = document.querySelector("#template").innerHTML;
// bookList.render(allBooks.books, html);
// bookList.renderWithTemplate(allBooks.books, html, template);

const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
    bookList.renderWithTemplate(allBooks.books, html, template);
};

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    const foundBook = allBooks.books.find(foundBook => foundBook.title === titleInput.value);
    if (foundBook && editId === null) {
        titleInput.setCustomValidity("Така книга вже є!");
        return;
    } else {
        titleInput.setCustomValidity("");
    }

    if (validateYear(yearInput.value)) {
        yearInput.setCustomValidity("");
    }
    else {
        yearInput.setCustomValidity("Рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік!");
    }

    if (editId == null) {
        allBooks.add(book);
    } else {
        allBooks.update(editId, book);
        editId = null;
    }

    render();
});

bookForm.titleInput.addEventListener("input", function () {
    const foundBook = allBooks.books.find(foundBook => foundBook.title === titleInput.value);
    if (foundBook && editId === null) {
        titleInput.setCustomValidity("Така книга вже є!");
    }
    else {
        titleInput.setCustomValidity("");
    }
});

bookForm.yearInput.addEventListener("input", function () {
    if (validateYear(yearInput.value)) {
        yearInput.setCustomValidity("");
    }
    else {
        yearInput.setCustomValidity("Рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік!");
    }
});

function validateYear(year) {
    // const currentYear = new Date().getFullYear();
    // const yearRegex = /^\d{4}$/; // Перевірка на 4 цифри

    // if (yearRegex.test(year)) {
    //     const yearNumber = parseInt(year, 10);
    //     return yearNumber >= 1450 && yearNumber <= currentYear;
    // }
    // return false;
    const currentYear = new Date().getFullYear();
    const yearNumber = parseInt(year, 10);
    return yearNumber >= 1450 && yearNumber <= currentYear;
};

function remove(id) {
    allBooks.remove(id);
    render();
};

function edit(id) {
    const book = allBooks.find(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
};

render();