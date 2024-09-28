const bookAttributs = {
  books: [
    { 
      "id": 1,
      "title": "Seagull's Laughter, The (Mávahlátur)",
      "author": "Hamilton Flury",
      "year": 2001,
      "genre": "Comedy|Drama"
    },
    { 
      "id": 2,
      "title": "Whatever Happened to Harold Smith?",
      "author": "Jourdan Bowser",
      "year": 2006,
      "genre": "Comedy"
    },
    {
      "id": 3,
      "title": "12 Rounds",
      "author": "Ernestus Jensen",
      "year": 1995,
      "genre": "Action|Thriller"
    },
    {
      "id": 4,
      "title": "Repentance (Monanieba)",
      "author": "Amargo Palfree",
      "year": 1999,
      "genre": "Drama"
    },
    {
      "id": 5,
      "title": "Dead Birds",
      "author": "Ambrosi Kornilov",
      "year": 1990,
      "genre": "Horror|War|Western"
    },
    {
      "id": 6,
      "title": "Valachi Papers,The",
      "author": "Conny Gordge",
      "year": 1986,
      "genre": "Crime|Drama"
    },
    { 
      "id": 7,
      "title": "Rabbit",
      "author": "Willie Iannello",
      "year": 2011,
      "genre": "Animation|Horror"
    },
    {
      "id": 8,
      "title": "Stuff, The",
      "author": "Tomasina Heal",
      "year": 2012,
      "genre": "Comedy|Horror|Mystery|Sci-Fi"
    },
    {
      "id": 9,
      "title": "Highwaymen",
      "author": "Malina Wimpey",
      "year": 1992,
      "genre": "Action|Crime|Thriller"
    },
    {
      "id": 10,
      "title": "Bring Me the Head of Alfredo Garcia",
      "author": "Carlynne Bodocs",
      "year": 1985,
      "genre": "Crime|Drama|Thriller"
    }
  ],

  lastId: 10,

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },

  remove(id) {
    let index = this.books.findIndex(x => x.id == id);
    this.books.splice(index, 1);
  },

  update(id, book) {
    let index = this.books.findIndex(x => x.id == id);
    this.books[index] = book;
  },
  
  find(id) {
    let index = this.books.findIndex(x => x.id == id);
    return this.books[index];
  }
}