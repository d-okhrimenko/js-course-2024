let ul = document.querySelector('#book-list');
let template = document.querySelector('#template').innerHTML;


// bookList.render(bookItems.books, ul);
bookList.renderWithTemplate(bookItems.books, ul, template);
