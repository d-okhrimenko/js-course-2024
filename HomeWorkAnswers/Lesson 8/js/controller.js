let html = document.querySelector("#bookList");
let template = document.querySelector("#template").innerHTML;
// bookList.render(allBooks.books, html);
bookList.renderWithTemplate(allBooks.books, html, template);