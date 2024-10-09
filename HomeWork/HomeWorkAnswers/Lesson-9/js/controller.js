const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const yearOfPublication = document.querySelector("#yearOfPublication");
const genre = document.querySelector("#genre");

let editId = null;

function render() {
    bookList.renderWithTemplate(Library.books, html, template);
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: title.value,
        author: author.value,
        yearOfPublication: yearOfPublication.value,
        genre: genre.value,
    };

    if (editId == null) {
        Library.add(book);
    } else {
        Library.update(editId, book);
        editId = null;
    }

    render();
});

remove = (id) => {
    Library.remove(id);
    render();
}

edit = (id) => {
    const book = Library.find(id);

    editId = book.id;

    title.value = book.title;
    author.value = book.author;
    yearOfPublication.value = book.yearOfPublication;
    genre.value = book.genre;

    render();

}



render();