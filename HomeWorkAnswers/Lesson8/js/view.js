const booksList = {
  render: function (array, htmlElement) {
    array.forEach((element) => {
      let section = document.createElement("div");
      section.classList.add("book");

      // section.insertAdjacentHTML("beforeend", `<h2>${book.title}</h2>`);
      // section.insertAdjacentHTML("beforeend", `<h3>${book.author}</h2>`);
      // section.insertAdjacentHTML("beforeend", `<p>Рік видання: ${book.year}</p>`);
      // section.insertAdjacentHTML("beforeend", `<p>Жанр твору: ${book.genre}</p>`);

      let bookTitle = document.createElement("h2");
      let bookAuthor = document.createElement("h3");
      let bookYear = document.createElement("p");
      let bookGenre = document.createElement("p");

      bookTitle.textContent = `${element.title}`;
      bookAuthor.textContent = `${element.author}`;
      bookYear.textContent = `Рік видання: ${element.year}`;
      bookGenre.textContent = `Жанр твору: ${element.genre}`;

      section.appendChild(bookTitle);
      section.appendChild(bookAuthor);
      section.appendChild(bookYear);
      section.appendChild(bookGenre);

      htmlElement.appendChild(section);
    });
  },
};
