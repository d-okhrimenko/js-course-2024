let html = document.querySelector("#library");
let template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

function render() {
    bookList.renderWithTemplate(library.books, html, template);
}


const titleBook = document.querySelector("#titleBook");
const authorBook = document.querySelector("#authorBook");
const yearBook = document.querySelector("#yearBook");
const ganreBook = document.querySelector("#ganreBook");


bookForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let book = {
        title: titleBook.value,
        author: authorBook.value,
        year: yearBook.value,
        ganre: ganreBook.value,
    };

    library.add(book);
    render();
});

render();
