let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(listBook.books, html, template);
