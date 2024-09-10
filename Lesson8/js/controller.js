console.log('index.html')

let html = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(allBooks.books, html, template);