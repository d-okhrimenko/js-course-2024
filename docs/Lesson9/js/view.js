const bookList = {
  // render(books, element) {
  //   books.forEach((book) => {
  //     let article = document.createElement("article");
  //     article.classList.add("book");
  //     article.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
  //     article.insertAdjacentHTML("beforeend", `<p>${book.author}</p>`);
  //     article.insertAdjacentHTML("beforeend", `<p>${book.year}</p>`);
  //     article.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);

  //     element.appendChild(article);
  //   });
  // },

  renderWithTemplate(book, element, template) {
    let html = "";
    book.forEach((book) => {
      html += Mustache.render(template, book);
    });

    element.innerHTML = html;
  },
};
