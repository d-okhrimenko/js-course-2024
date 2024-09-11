const View = {
  renderWithTemplate(books, element, template) {
    let htmlTemplate = '';
    books.forEach(book => htmlTemplate += Mustache.render(template, book));
    element.innerHTML = htmlTemplate;
  }
}