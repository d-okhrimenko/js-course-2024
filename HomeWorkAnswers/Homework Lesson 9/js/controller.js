let html = document.querySelector("#books-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(bookInfo.books, html, template);

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
    bookList.renderWithTemplate(bookInfo.books, html, template);
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
    };

    if (editId == null) {
        bookInfo.add(book);
    } else {
        bookInfo.update(editId, book);
        editId = null;
    }
    
    render();
});

function remove(id) {
    bookInfo.remove(id);
    render();
}

function edit(id) {
    const book = bookInfo.find(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();
