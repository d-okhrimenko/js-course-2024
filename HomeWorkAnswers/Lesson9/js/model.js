const booksList = {
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Tragedy",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      genre: "Historical",
    },
  ],
  lastId: 10,

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },
  remove(id) {
    let index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  },
  update(id, book) {
    let index = this.books.findIndex((x) => x.id == id);
    this.books[index] = book;
  },
  find(id) {
    let index = this.books.findIndex((x) => x.id == id);
    return this.books[index];
  },
};
