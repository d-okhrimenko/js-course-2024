let htmlElement = document.querySelector("#book-list");
let htmlTemplate = document.querySelector("#template").innerHTML;
bookRender.renderWithTemplate(bookList.bookItems, htmlElement, htmlTemplate);
