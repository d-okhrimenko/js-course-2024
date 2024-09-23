const bookList = {
  render(books, element) {
    books.forEach(book => {
      let section = document.createElement('section');
      section.classList.add('bookCard');

      section.insertAdjacentHTML(
        'beforeend',
        `<p class="bookTitle"><strong>Title:</strong> ${book.title}</p>`
      );
      section.insertAdjacentHTML(
        'beforeend',
        `<p class="bookAuthor"><strong>Author:</strong> ${book.author}</p>`
      );
      section.insertAdjacentHTML(
        'beforeend',
        `<p class="bookYear"><strong>Year:</strong> ${book.year}</p>`
      );
      section.insertAdjacentHTML(
        'beforeend',
        `<p class="bookGenre"><strong>Genre:</strong> ${book.genre}</p>`
      );
      element.appendChild(section);
    });
  },

  renderWithTemplate(books, element, template) {
    let html = '';
    books.forEach(book => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  }
};
