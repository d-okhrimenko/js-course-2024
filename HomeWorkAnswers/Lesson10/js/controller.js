// let book = new Book("Скотный двор", "Джордж Оруэлл", 1945, "Притча");
// booksDb.add(book);
// booksDb.remove("Старий і море");
const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
    // bookList.render(booksDb.books, html);
    bookList.renderWithTemplate(booksDb.books, html, template);
}

bookForm.title.addEventListener("focus", function (e) {  // for test only
    e.preventDefault();
    console.log("focus");
});

bookForm.title.addEventListener("blur", function (e) {  // for test only
    e.preventDefault();
    console.log("blur");
});

// bookForm.title.addEventListener("input", function () {
    // setCustomValidity - додає налаштовуване повідомлення про помилку в елемент.
    // якщо повідомлення встановлено - елемент не вважається валідним, "" - елемент вважається валідним.
    // if (bookForm.titleInput.value.length <= 0)
    //     bookForm.titleInput.setCustomValidity("Назва книги не повинна бути порожньою.");
    // else if (booksDb.findByTitle(bookForm.titleInput.value) != undefined)
    //     bookForm.titleInput.setCustomValidity("Назва книги не повинна бути в масиві.");
    // else
    //     bookForm.titleInput.setCustomValidity(""); // прибираемо помилку
// });

bookForm.title.addEventListener("change", function () {
    validateElement(bookForm.titleInput, "#titleError");
});

bookForm.author.addEventListener("change", function () {
    validateElement(bookForm.authorInput, "#authorError");
});

bookForm.year.addEventListener("change", function () {
    validateElement(bookForm.yearInput, "#yearError");
});

bookForm.genre.addEventListener("change", function () {
    validateElement(bookForm.genreInput, "#genreError");
});

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);

    let isValid = false;
    switch(element.name) {
        case "title":
            isValid = (element.value.length > 0) && (booksDb.findByTitle(element.value) == undefined);
            break;
        case "author":
            isValid = (element.value.length > 0);
            break;
        case "year":
            let yy = parseInt(element.value);
            isValid = (!isNaN(yy)) && (yy >= 1450) && (yy <= new Date().getFullYear());
            break;
        case "genre":
            isValid = (element.value.length > 0);
            break;
    }
    if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
        errorElement.style.display = "none";
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
        errorElement.style.display = "inline";
    }
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    validateElement(bookForm.titleInput, "#titleError");
    validateElement(bookForm.authorInput, "#authorError");
    validateElement(bookForm.yearInput, "#yearError");
    validateElement(bookForm.genreInput, "#genreError");
    let invalidElements = document.querySelectorAll(".invalid");
    if (invalidElements.length > 0)
        exit;

    let book = {
        id: editId,
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
    };

    if (editId == null) {
        booksDb.add(book);
    } else {
        booksDb.update(editId, book);
        editId = null;
    }

    render();
});

function remove(id) {
    booksDb.remove(id);
    render();
}

function edit(id) {
    const book = booksDb.find(id);

    editId = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();
