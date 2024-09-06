const booksList = {
  render(books, element, template) {
    let outputHtml = '';

    books.forEach(book => {
      outputHtml += Mustache.render(template, book);
      // outputHtml = `${outputHtml}${Mustache.render(template, book)}`;
    });

    element.innerHTML = outputHtml;
  },
};
