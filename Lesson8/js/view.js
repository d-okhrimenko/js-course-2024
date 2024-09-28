const bookList = {
  renderWithTemplate(books, element, template) {

    let sectionElement = document.createElement('section');
    sectionElement.id = element.id;

    books.forEach(book => {
      sectionElement.insertAdjacentHTML('beforeend', Mustache.render(template, book));
    });

    let parent = element.parentNode;

    parent.replaceChild(sectionElement, element);
  }
}