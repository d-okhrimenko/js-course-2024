const bookList = {
  render(books, element) {
    books.forEach(book => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
      section.insertAdjacentHTML("beforeend", `<p>Phone: ${book.author}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>Email: ${book.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);
      element.appendChild(section);
    });
  },

  renderWithTemplate(books, element, template) {
    let html = "";
    books.forEach(book => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  }
}