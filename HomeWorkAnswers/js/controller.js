let html = document.querySelector("#library");
let template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

function render() {
    bookList.renderWithTemplate(library.books, html, template);
}

let editId = null;

const titleBook = document.querySelector("#titleBook");
const authorBook = document.querySelector("#authorBook");
const yearBook = document.querySelector("#yearBook");
const genreBook = document.querySelector("#genreBook");

titleBook.addEventListener("input", function () {
    let userInput = titleBook.value;
    if (library.findByTitle(userInput)) {
        titleBook.setCustomValidity(
            "Книга з такою назвою вже існує в бібліотеці"
        );
    } else {
        titleBook.setCustomValidity("");
    }
});

yearBook.addEventListener("input", function () {
    let maxYear = new Date().getFullYear();
    console.log(maxYear);
    let minYear = 1450;
    if (yearBook.value < minYear || yearBook.value > maxYear) {
        yearBook.setCustomValidity(
            `"Введіть рік в діапазоні між ${minYear}" та "${maxYear}"`
        );
    } else {
        yearBook.setCustomValidity("");
    }
});

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleBook.value,
        author: authorBook.value,
        year: yearBook.value,
        genre: genreBook.value,
    };

    if (editId === null) {
        library.add(book);
    } else {
        library.update(editId, book);
        editId = null;
    }
    clearForm();
    render();
});

function remove(id) {
    library.remove(id);
    render();
}

function edit(id) {
    const book = library.find(id);
    editId = book.id;
    titleBook.value = book.title;
    authorBook.value = book.author;
    yearBook.value = book.year;
    genreBook.value = book.genre;

    render();
    titleBook.focus();
}

function clearForm() {
    titleBook.value = "";
    authorBook.value = "";
    yearBook.value = "";
    genreBook.value = "";
}

render();
