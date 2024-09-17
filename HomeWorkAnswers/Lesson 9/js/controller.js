const html = document.querySelector("#bookList");
// marking.render(classBook.books, html);
let template = document.querySelector("#template").innerHTML;

// marking.renderWithTemplate(classBook.books, html, template);

//inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const bookForm = document.querySelector("#bookForm");

let editId = null;

function render() {
marking.renderWithTemplate(classBook.books, html, template);
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
        classBook.add(book); 
    } else {
        classBook.update(editId, book);
        editId = null;
    }
    render();
})

function remove(id) {
    classBook.remove(id);
    render();
}

function edit(id) {
    const book = classBook.find(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;

    render();
}

render();