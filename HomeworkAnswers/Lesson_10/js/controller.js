const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() { bookList.renderWithTemplate(booksList.books, html, template); }

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: yearInput.value.trim(),
        genre: genreInput.value.trim()
    }
    let duplicateCheck = false;
    booksList.books.forEach(el => {
        if (el.title.toLowerCase() === book.title.toLowerCase()) {
            duplicateCheck = true;
            alert("This book already exists"); 
            }
    });
    if(!duplicateCheck){
        if (editId == null) {
            booksList.add(book);
        } else if(duplicateCheck == false) {
            booksList.update(editId, book)
            editId = null;
        }
        clearForm();
    }
    render();
})
function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    genreInput.value = "";
}
function remove(id) {
    booksList.remove(id);
    render();
}

function edit(id) {
    const book = booksList.find(id);
    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();