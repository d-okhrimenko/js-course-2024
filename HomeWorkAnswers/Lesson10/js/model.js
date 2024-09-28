const library = {
  books: [
    {
      id: 1,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
      imgBook: "./img/1.jpg",
    },
    {
      id: 2,
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
      imgBook: "./img/2.jpg",
    },
    {
      id: 3,
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
      imgBook: "./img/3.jpg",
    },
    {
      id: 4,
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
      imgBook: "./img/4.jpg",
    },
    {
      id: 5,
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
      imgBook: "./img/5.jpg",
    },
  ],

  lastId: 5,

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },

  remove(id) {
    let index = this.books.findIndex((x) => x.id === id);
    this.books.splice(index, 1);
  },

  update(id, book) {
    let index = this.books.findIndex((x) => x.id === id);
    this.books[index] = book;
  },

  find(id) {
    let index = this.books.findIndex((x) => x.id === id);
    return this.books[index];
  },
};
