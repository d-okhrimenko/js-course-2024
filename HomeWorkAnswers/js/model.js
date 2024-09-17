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

  add(book) {
    const { items } = this;
    const isBookExist = items.some(({ title }) => title === book.title);

    if (isBookExist) {
      console.error('Книга з такою назвою вже існує');
      return;
    }

    const newBook = {
      ...book,
      id: crypto.randomUUID(),
    };

    items.push(newBook);
  },

  remove(id) {
    const { items } = this;
    const idx = items.findIndex((item) => item.id === id);
    items.splice(idx, 1);
  },

  update(id, book) {
    const { items } = this;
    const idx = items.findIndex((item) => item.id === id);
    items[idx] = { id, ...book };
  },

  findById(id) {
    const { items } = this;
    const idx = items.findIndex((item) => item.id === id);
    return items[idx];
  },
};
