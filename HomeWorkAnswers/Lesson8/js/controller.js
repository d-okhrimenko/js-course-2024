const html = document.querySelector('#bookList');
const template = document.querySelector('#template').innerHTML;

function render() {
  bookList.renderWithTemplate(bookCatalog.books, html, template);
}

render();
