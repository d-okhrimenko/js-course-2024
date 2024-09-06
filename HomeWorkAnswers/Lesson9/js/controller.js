let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookstListRender.renderWithTemplate(booksList.books, html, template);