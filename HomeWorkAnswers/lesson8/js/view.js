const bookRender = {
  render(books, element) {
    books.forEach((book) => {
      let div = document.createElement("div");
      div.classList.add("book");
      div.insertAdjacentHTML("beforeend", `<h3>  "${book.title}"</h3>`);
      div.insertAdjacentHTML("beforeend", `<p>автор - ${book.author} </p>`);
      div.insertAdjacentHTML("beforeend", `<p>рік - ${book.year} </p>`);
      div.insertAdjacentHTML("beforeend", `<p>жанр - ${book.genre} </p>`);
      element.appendChild(div);
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
