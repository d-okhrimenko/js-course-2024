let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(libBooks.books, html, template);