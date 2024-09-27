const bookRender = {
  render(books, element) {
    books.forEach((book) => {
      let section = document.createElement("section");
      section.classList.add("book");

      section.insertAdjacentHTML("beforeend", `<h3>  "${book.title}"</h3>`);
      section.insertAdjacentHTML("beforeend", `<p>автор - ${book.author} </p>`);
      section.insertAdjacentHTML("beforeend", `<p>рік - ${book.year} </p>`);
      section.insertAdjacentHTML("beforeend", `<p>жанр - ${book.genre} </p>`);
      section.insertAdjacentHTML("beforeend", `<p>id - ${book.id} </p>`);
      element.appendChild(section);
    });
  },

  renderWithTemplate(array, element, template) {
    let html = "";
    array.forEach((book) => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  },
};
