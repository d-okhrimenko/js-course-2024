const bookList = {
  render(books) {
    section.innerHTML = "";
    books.forEach((book) => {
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="book">
          <h2>Title: ${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Year: ${book.year}</p>
          <p>Genre: ${book.genre}</p>
          <button onclick="edit(${book.id})">Edit</button>
          <button onclick="remove(${book.id})">Delete</button>
        </div>`
      );
    });
  },
};
