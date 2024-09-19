let content = document.querySelector("#book-list");
// bookList.render(library.books, content);
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(library.books, content, template);