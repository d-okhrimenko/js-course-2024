import { library } from "./model.js";
import { bookList, bookForm } from "./view.js";
import { templateBook, templateForm } from "./templates.js";
import { validate } from "./formValidation.js";

const htmlBookList = document.querySelector("#bookList");

const renderBookList = () => {
    const data = { books: library.books };

    bookList.render(data, htmlBookList, templateBook);
    eventHandlers();
}
renderBookList();

function eventHandlers() {
    const btnEdit = document.querySelectorAll("#btnEdit");

    btnEdit.forEach(element => {
        const id = element.getAttribute("data-id");
        element.addEventListener("click", () => edit(Number(id)));
        element.addEventListener("click", () => { popupForm.style.display = "flex"; });
    });

    const btnDelete = document.querySelectorAll("#btnDelete");

    btnDelete.forEach(element => {
        const id = element.getAttribute("data-id");
        element.addEventListener("click", () => remove(Number(id)));
    });
}

const edit = (id) => {
    const book = library.find(id);

    form.dataset.id = id;
    form.title.value = book.title;
    form.author.value = book.author;
    form.year.value = book.year;
    form.genre.value = book.genre;
}

const remove = (id) => {
    library.delete(id);
    renderBookList();
}

const htmlForm = document.querySelector(".modal-content");

const renderBookForm = () => bookForm.render(htmlForm, templateForm);
renderBookForm();

const form = document.forms[0];
const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");

form.dataset.id = "";
form.btnClose.addEventListener("click", () => { popupForm.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === popupForm) popupForm.style.display = "none"; });

openFormBtn.addEventListener("click", () => {
    popupForm.style.display = "flex";
    form.reset();
    form.dataset.id = "";

    const elementsValid = document.querySelectorAll(".valid");
    const elementsInalid = document.querySelectorAll(".invalid");
    const errorMsg = document.querySelectorAll(".error");

    elementsValid.forEach(element => element.classList.remove("valid"));
    elementsInalid.forEach(element => element.classList.remove("invalid"));
    errorMsg.forEach(element => element.textContent = "");
});

form.title.addEventListener("change", () => {
    validate.emptyField(form.title, "#titleError");
    validate.dublicate(form.title, "#titleError");
});

form.author.addEventListener("change", () => {
    validate.emptyField(form.author, "#authorError");
});

form.year.addEventListener("change", () => {
    validate.emptyField(form.year, "#yearError");
    if (!form.year.classList.contains("invalid"))
        validate.year(form.year, "#yearError");
});

form.genre.addEventListener("change", () => {
    validate.emptyField(form.genre, "#genreError");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate.emptyField(form.title, "#titleError");
    validate.dublicate(form.title, "#titleError");
    validate.emptyField(form.author, "#authorError");
    validate.emptyField(form.year, "#yearError");
    if (!form.year.classList.contains("invalid"))
        validate.year(form.year, "#yearError");
    validate.emptyField(form.genre, "#genreError");

    let invalidElements = document.querySelectorAll(".invalid");
    if (invalidElements.length > 0) return;

    let book = {
        title: form.title.value,
        author: form.author.value,
        year: form.year.value,
        genre: form.genre.value
    };

    let id = form.dataset.id;

    if (id) {
        book.id = Number(id);
        library.modify(Number(id), book);
    } else {
        library.add(book);
    }

    form.reset();
    form.dataset.id = "";
    renderBookList();
    popupForm.style.display = "none";
});
