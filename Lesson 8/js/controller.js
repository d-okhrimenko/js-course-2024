let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
catalog.render(bookList.books, html, template);