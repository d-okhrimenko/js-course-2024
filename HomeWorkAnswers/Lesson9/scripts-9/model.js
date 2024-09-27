export const state = {
  books: [
    { title: "1984", author: "George Orwell", year: 1949, genre: "Anti-utopia", id: 1 },
    { title: "Harry Potter and the Philosopher's Stone", author: "JK Rowling", year: 1997, genre: "Fantasy", id: 2 },
    { title: "Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "Fantasy", id: 3 },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, genre: "Adventure novel", id: 4 },
    { title: "The Master and Margarita", author: "Mykhailo Bulgakov", year: 1967, genre: "Fiction", id: 5 },
  ],
};

state.lastId = state.books.length;

export const getAllBooks = function () {
  const books = state.books;
  return books;
};

export function findIndex(id) {
  return state.books.findIndex((bookEl) => bookEl.id === id);
}

export const removeBook = function (id) {
  const index = findIndex(id);
  state.books.splice(index, 1);
};

export const updateBook = function (id, newBook) {
  const index = findIndex(id);
  state.books.splice(index, 1, newBook);
};

export const addBook = function (book) {
  state.lastId++;
  book.id = state.lastId;
  state.books.push(book);
};
