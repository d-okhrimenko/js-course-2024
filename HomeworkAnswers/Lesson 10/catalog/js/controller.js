const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

// inputs
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

form = document.getElementById("bookForm");

function render() {
    catalog.render(bookList.books, html, template);
}



form.addEventListener("submit", function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    if (editId == null) {
        bookList.add(book);
    } else {
        bookList.update(editId, book);
        editId = null;
    }

    render();
});



form.titleInput.addEventListener("change", function () {
    let book = bookList.findTitle(form.titleInput.value);
    if (book) {
        form.titleInput.setCustomValidity("Дублікат книги");
    }
    else {
        form.titleInput.setCustomValidity("");
    }
});

form.yearInput.addEventListener("change", function () {
    let minYear = 1450;
    let maxYear = new Date().getFullYear();
    if (form.yearInput.value < minYear || form.yearInput.value > maxYear) {
        form.yearInput.setCustomValidity(`Рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік`);
    }
    else {
        form.yearInput.setCustomValidity("");
    }
});
function remove(id) {
    bookList.remove(id);
    render();
}

function edit(id) {
    const book = bookList.find(id);
    editId = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    render();
}

render();


