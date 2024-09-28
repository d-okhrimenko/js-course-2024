const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;
function editBook(bookID) {
    editId = bookID;
    const book = booksArray.find(bookID);
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    displayBooks();
}

function deleteBook(bookID) {
    booksArray.delete(bookID);

    displayBooks();
}

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let book = new Book(titleInput.value, authorInput.value, yearInput.value, genreInput.value);
    if (editId) {
        booksArray.edit(editId, book);
        editId = null;
    } else {
        booksArray.add(book);
    }
    titleInput.value = null;
    authorInput.value = null;
    yearInput.value = null;
    genreInput.value = null;

    displayBooks();
});