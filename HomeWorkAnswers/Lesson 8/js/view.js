const bookList = {
  render(books) {
    books.forEach((book) => {
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="book">
          <h2>Title: ${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Year: ${book.year}</p>
          <p>Genre: ${book.genre}</p>
        </div>`
      );
    });
  },
};
