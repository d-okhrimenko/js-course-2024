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

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

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
