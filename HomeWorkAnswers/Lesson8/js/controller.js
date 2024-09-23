let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookList.render(library.books, html, template);