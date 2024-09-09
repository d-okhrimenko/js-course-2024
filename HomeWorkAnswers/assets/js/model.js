export class Model {
  #books;
  #lastId = 5;

  constructor(books = []) {
    this.#books = books;
  }

  add(book) {
    if (this.find(book.id)) return;
    book.id = ++this.#lastId;
    this.#books.push(book);
  }

  remove(id) {
    if (!this.find(id)) return;
    this.#books = this.#books.filter(book => book.id != id);
  }

  update(book) {
    this.#books = this.#books.map(item => item.id == book.id ? book : item);
  }

  find(id) {
    return this.#books.find(book => book.id == id);
  }

  get bookList() {
    return this.#books;
  }
}