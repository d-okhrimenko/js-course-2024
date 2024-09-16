let content = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(library.books, content, template);