const bookList = {
  render(books, element) {
    books.forEach((book) => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>Title: ${book.title}</h2>`);
      section.insertAdjacentHTML("beforeend",`<h3>Author: ${book.author}</h3>`);
      section.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
      element.appendChild(section);
    });
  },

  renderWithTemplate(books, element, template) {
    let html = "";
    books.forEach((book) => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  },
};
