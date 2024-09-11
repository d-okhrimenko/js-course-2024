let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(booksList.books, html, template);
