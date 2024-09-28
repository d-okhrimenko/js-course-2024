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
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    if (editId == null) {
        allBooks.add(book);
    } else {
        allBooks.update(editId, book);
        editId = null;
    }

    render();
});

function remove(id) {
    allBooks.remove(id);
    render();
}

function edit(id) {
    const book = allBooks.find(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();