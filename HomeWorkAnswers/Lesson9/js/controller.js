let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bList.renderWithTemplate(listBook.books, html, template);