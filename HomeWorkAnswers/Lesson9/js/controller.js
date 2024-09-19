const element = document.querySelector("#books-catalogue");
const bookForm = document.querySelector("#bookForm");
const btnSubmit = document.querySelector(".btn-submit");

const formBookTitle = document.querySelector(".form-book-title");
const formBookAuthor = document.querySelector(".form-book-author");
const formBookYear = document.querySelector(".form-book-year");
const formBookGenre = document.querySelector(".form-book-genre");
const formBookCover = document.querySelector(".form-book-cover");

function render() {
    booksСatalogue.render(booksList.books, element);
}

let editId = null;

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    btnSubmit.textContent = "Додати книгу";

    let book = {
        id: editId,
        title: formBookTitle.value,
        author: formBookAuthor.value,
        year: formBookYear.value,
        genre: formBookGenre.value,
        cover: formBookCover.value
    };

    if (editId == null) {
        booksList.add(book);
    } else {
        booksList.update(editId, book);
        editId = null;
    }
    
    clearForm();
    render();
});

function editBook(id) {
    btnSubmit.textContent = "Зберегти зміни";

    const book = booksList.find(id);

    editId = book.id;
    formBookTitle.value = book.title;
    formBookAuthor.value = book.author;
    formBookYear.value = book.year;
    formBookGenre.value = book.genre;
    formBookCover.value = book.cover;

    render();
}

function removeBook(id) {
    booksList.remove(id);
    render();
}

function clearForm() {
    formBookTitle.value = "";
    formBookAuthor.value = "";
    formBookYear.value = "";
    formBookGenre.value = "";
    formBookCover.value = "";
}

render();
