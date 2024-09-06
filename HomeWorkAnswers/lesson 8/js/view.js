const booksList = {
  render(books, element, template) {
    let outputHtml = '';

    books.forEach(book => {
      html += Mustache.render(template, book);
      // html = `${html}${Mustache.render(template, book)}`;
    });

    element.innerHTML = outputHtml;
  },
};
