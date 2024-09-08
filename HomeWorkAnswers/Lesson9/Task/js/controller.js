const html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;

const bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    }

    if (editId == null)
        bookCatalog.add(book);
    else {
        bookCatalog.update(editId, book);
        editId = null;
    }
    render();

})
// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let render = () => {
    bookList.render(books, html, template);
    clearForm();
}

let clearForm = () => {
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    genreInput.value = "";
}

function remove(id) {
    bookCatalog.remove(id);
    render();
}

function edit(id) {
    let book = bookCatalog.find(id);
    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
}

// start point
bookCatalog.loadDataFromJson();

let books = bookCatalog.books;
let editId = null;

render();
