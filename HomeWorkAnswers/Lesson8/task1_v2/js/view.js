let listBooks = {
  _add(...books) {
    for (let i = 0; i < books.length; i++) {
      let p = document.createElement("p");

      p.textContent = `${books[i].title} — ${books[i].author}, ${books[i].year}, ${books[i].genre}`;

      myBooks.paragraphs.push(p);
      console.log(p);
    }
  },

  _display(books, element, template) {
    element.innerHTML = "";
    books.forEach((book) => {
      const renderedP = Mustache.render(template, book);
      const div = document.createElement("div");
      div.innerHTML = renderedP;
      element.appendChild(div);
    });
  },
};
