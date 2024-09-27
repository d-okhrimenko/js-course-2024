let htmlElement = document.querySelector("#booksList");
let template = document.querySelector("#template").innerHTML;

booksList.renderWithTemplate(books, htmlElement, template);