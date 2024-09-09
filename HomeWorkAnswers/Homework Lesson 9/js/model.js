const bookInfo = {
  books: [
    {
      "id": 1,
      "title": "The Mysterious Island",
      "author": "Jules Verne",
      "year": "1875",
      "genre": "Adventure Novel"
    },
    {
      "id": 2,
      "title": "Forrest Gump",
      "author": "Winston Groom",
      "year": "1986",
      "genre": "Novel"
    },
    {
      "id": 3,
      "title": "White Fang",
      "author": "Jack London",
      "year": "1906",
      "genre": "Adventure"
    },
    {
      "id": 4,
      "title": "The Witcher",
      "author": "Andrzej Sapkowski",
      "year": "1986",
      "genre": "Fantasy"
    },
    {
      "id": 5,
      "title": "Ivanhoe",
      "author": "Walter Scott",
      "year": "1819",
      "genre": "Chivalric Romance"
    }
  ],

  lastId: 5,

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
    let index = this.books.findIndex(x => x.id == id);
    return this.books[index];
  } 
}
