const View = {
  renderBooks(books, element) {
    books.forEach(book => {
      const { title, author, year, genre } = book;
      let section = document.createElement('section');
      section.classList.add('book-item');
      section.insertAdjacentHTML('beforeend', `<h2>${title}</h2>`);
      section.insertAdjacentHTML('beforeend', `<p><strong>Автор:</strong> ${author}</p>`);
      section.insertAdjacentHTML('beforeend', `<p><strong>Рік видання:</strong> ${year}</p>`);
      section.insertAdjacentHTML('beforeend', `<p><strong>Жанр:</strong> ${genre}</p>`);
      element.appendChild(section);
    });
  },

  renderWithTemplate(books, element, template) {
    let htmlTemplate = '';
    books.forEach(book => htmlTemplate += Mustache.render(template, book));
    element.innerHTML = htmlTemplate;
  }
}