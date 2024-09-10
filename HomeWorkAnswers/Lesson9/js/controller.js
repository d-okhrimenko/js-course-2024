const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm")

const modal = document.getElementById('form-modal');

// inputs
const bookAuthorInput = document.querySelector("#bookAuthorInput");
const bookTitleInput = document.querySelector("#bookTitleInput");
const bookYearInput = document.querySelector("#bookYearInput");
const bookGenreInput = document.querySelector("#bookGenreInput");

let bookId = 0;
let pressedButton = "";

function render() {
    bookstListRender.renderWithTemplate(booksList.books, html, template);
}

function openForm(id) {
    bookId = id;
    pressedButton = "edit";

    const book = booksList.find(bookId);
    if (bookId != 1) {
        bookAuthorInput.value = book.author;
        bookTitleInput.value = book.title;
        bookYearInput.value = book.year;
        bookGenreInput.value = book.genre;
    }
    else {
        bookAuthorInput.value = "";
        bookTitleInput.value = "";
        bookYearInput.value = "";
        bookGenreInput.value = "";
    }

    modal.style.display = 'block';

}

function closeForm() {
    pressedButton = "close";
}


function remove() {
    pressedButton = "remove";
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (pressedButton == "remove") {
        if (bookId != 1) {
            booksList.remove(bookId);
        }
    } 
    else if (pressedButton == "edit") {
        let book = {
            title: bookTitleInput.value,
            author: bookAuthorInput.value,
            year: bookYearInput.value,
            genre: bookGenreInput.value
        };

        if (bookId == 1) {
            booksList.add(book);
        }
        else {
            booksList.update(bookId, book);
        }
    }
    modal.style.display = 'none';
    render();

});

render();

