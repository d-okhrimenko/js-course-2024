let html = document.querySelector("#books-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(bookInfo.books, html, template);
