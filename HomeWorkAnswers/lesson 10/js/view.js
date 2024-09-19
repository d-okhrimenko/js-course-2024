const booksList = {
  render(books, template) {
    output.innerHTML = Mustache.render(template, books);
  },
};
