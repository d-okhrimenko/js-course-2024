let html = document.querySelector("#library");
let template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

function render() {
    bookList.renderWithTemplate(library.books, html, template);
}





render();
