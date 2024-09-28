let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
// bookList.render(library.books, html)
bookList.renderWithTemplate(library.books, html, template);
