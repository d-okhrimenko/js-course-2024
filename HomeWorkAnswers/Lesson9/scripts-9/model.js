export const state = {
  books: [
    { title: "1984", author: "George Orwell", year: 1949, genre: "Anti-utopia" },
    { title: "Harry Potter and the Philosopher's Stone", author: "JK Rowling", year: 1997, genre: "Fantasy" },
    { title: "Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "Fantasy" },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, genre: "Adventure novel" },
    { title: "The Master and Margarita", author: "Mykhailo Bulgakov", year: 1967, genre: "Fiction" },
  ],
};

export const getAllBooks = function () {
  const books = state.books;
  return books;
};

export const removeBook = function (book) {
  const index = state.books.findIndex((bookEl) => bookEl.title === book.title && bookEl.author === book.author);
  state.books.splice(index, 1);
};

export const addBook = function (book) {
  state.books.push(book);
};
