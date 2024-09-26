let html = document.querySelector('#book-list');
let template = document.querySelector('#template').innerHTML;
bookCatalog.renderMustache(bookList.books, html, template);
