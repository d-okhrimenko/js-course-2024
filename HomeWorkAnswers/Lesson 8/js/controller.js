
const bookList = document.querySelector('.book_list');

bookCard.render(books, bookList)

const html = document.querySelector('.book_list-template')
let template = document.querySelector('#template').innerHTML;
bookCard.renderWithTemplate(books, html, template)