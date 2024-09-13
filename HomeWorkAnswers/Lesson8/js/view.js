const bookList = {
  render(books, element) {
    books.forEach((book) => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.author}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>${book.genre}</p>`);
      element.appendChild(section);
    });
  },
};
