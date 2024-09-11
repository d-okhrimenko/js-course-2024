const booksModel = {
  books: [],

  async fetchBooks() {
    try {
      const response = await fetch('api/books.json'); // Завантажуємо JSON з книгами
      if (!response.ok) {
        throw new Error('Помилка завантаження даних');
      }
      this.books = await response.json();
      this.lastId = this.books[this.books.length - 1]?.id || 0;
    } catch (error) {
      console.error('Сталася помилка під час завантаження книг:', error);
      this.books = [];
    }
  },

  lastId: 0,

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },
  remove(id) {
    let index = this.books.findIndex((x) => x.id == id);
    this.books.splice(index, 1);
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

