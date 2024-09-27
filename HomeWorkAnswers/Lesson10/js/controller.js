const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const contactForm = document.querySelector("#contactForm");

// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const form = document.forms[0];

form.name.addEventListener("change", function () {
    validateElement(form.name, "#nameError");
});

form.autor.addEventListener("change", function () {
    validateElement(form.autor, "autorError");
});

form.year.addEventListener("change", function () {
    validateElement(form.year, "#yearError");
});

form.genre.addEventListener("change", function () {
    validateElement(form.genre, "genreError");
});

form.addEventListener("submit", function (e) {
    validateElement(form.name, "#nameError");
    validateElement(form.autor, "#autorError");
    validateElement(form.year, "#yearError");
    validateElement(form.genre, "#genreError");


    let invalidElements = document.querySelectorAll(".invalid");
    if (invalidElements.length > 0) {
        e.preventDefault();
    }
    else {
        alert("Форма відправлена");
    }
});

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);

    element.classList.remove("valid");
    element.classList.remove("invalid");
    errorElement.style.display = "none";

    if (element.value.length > 0) {
        element.classList.add("valid");
    }
    else {
        element.classList.add("invalid");
        errorElement.style.display = "inline";
    }
}
//

form.name.addEventListener('change', function (event) {
    if (listBook.books.some((book) => book.title === event.target.value)) {
        console.log(event.target.value);
        form.name.setCustomValidity(
            'The book is already listed in the listBook'
        );
        event.preventDefault();
    } else {
        form.name.setCustomValidity('');
    }
});

const minYear = 1450;
let currentYear = new Date().getFullYear();

form.year.addEventListener('change', function (event) {
    if (form.year.value < minYear) {
        form.year.setCustomValidity('The year should be not less than 1450');
        event.preventDefault();
    } else if (isNaN(form.year.value)) {
        form.year.setCustomValidity('Введіть корректно рік');
        event.preventDefault();
    } else if (form.year.value > currentYear) {
        form.year.setCustomValidity(
            'The year should be not more than current year'
        );
        event.preventDefault();
    } else {
        form.year.setCustomValidity('');
    }
});
//

let editId = null;

function render() {
    contactList.renderWithTemplate(listBook.books, html, template);
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
        // description: descriptionInput.value
    };

    if (editId == null) {
        listBook.add(book);
    } else {
        listBook.update(editId, book);
        editId = null;
    }

    render();
});

function remove(id) {
    listBook.remove(id);
    render();
}

function edit(id) {
    const book = listBook.find(id);


    editId = book.id;
    console.log(editId);
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();