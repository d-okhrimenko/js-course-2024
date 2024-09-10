const books = {
  items: [
    {
      id: 'm0wrpicq',
      title: '1984',
      author: 'Джордж Орвелл',
      year: 1949,
      genre: 'Антиутопія',
    },
    {
      id: 'm0wrq12d',
      title: 'Гаррі Поттер і філософський камінь',
      author: 'Дж. К. Роулінг',
      year: 1997,
      genre: 'Фентезі',
    },
    {
      id: 'm0wrqazb',
      title: 'Гра престолів',
      author: 'Джордж Р. Р. Мартін',
      year: 1996,
      genre: 'Фентезі',
    },
    {
      id: 'm0wrqloc',
      title: 'Старий і море',
      author: 'Ернест Хемінгуей',
      year: 1952,
      genre: 'Пригодницький роман',
    },
    {
      id: 'm0wrqwb4',
      title: 'Майстер і Маргарита',
      author: 'Михайло Булгаков',
      year: 1967,
      genre: 'Фантастика',
    },
  ],

  add(bookData) {
    const book = {
      id: Date.now().toString(36),
      ...bookData,
    };

    this.items.push(book);
  },

  remove(id) {
    const idx = this.items.findIndex((item) => item.id === id);
    this.items.splice(idx, 1);
  },

  update(id, book) {
    const idx = this.items.findIndex((item) => item.id === id);
    this.items[idx] = { id, ...book };
  },

  findById(id) {
    const idx = this.items.findIndex((item) => item.id === id);
    return this.items[idx];
  },
};
