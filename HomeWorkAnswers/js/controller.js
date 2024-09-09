let html = document.querySelector("#library");
let template = document.querySelector("#template").innerHTML;

bookList.renderWithTemplate(library.books, html, template);
