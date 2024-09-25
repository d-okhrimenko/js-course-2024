const catalog = {
  books: [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      year: 1949,
      genre: 'Антиутопія',
    },
    {
      id: 2,
      title: 'Гаррі Поттер і філософський камінь',
      author: 'Дж. К. Роулінг',
      year: 1997,
      genre: 'Фентезі',
    },
    {
      id: 3,
      title: 'Гра престолів',
      author: 'Джордж Р. Р. Мартін',
      year: 1996,
      genre: 'Фентезі',
    },
    {
      id: 4,
      title: 'Старий і море',
      author: 'Ернест Хемінгуей',
      year: 1952,
      genre: 'Пригодницький роман',
    },
    {
      id: 5,
      title: 'Майстер і Маргарита',
      author: 'Михайло Булгаков',
      year: 1967,
      genre: 'Фантастика',
    },
    {
      id: 6,
      title: 'Убити пересмішника',
      author: 'Гарпер Лі',
      year: 1960,
      genre: 'Класика',
    },
    {
      id: 7,
      title: 'Володар перснів',
      author: 'Дж. Р. Р. Толкін',
      year: 1954,
      genre: 'Фентезі',
    },
    {
      id: 8,
      title: 'Сто років самотності',
      author: 'Габріель Гарсія Маркес',
      year: 1967,
      genre: 'Магічний реалізм',
    },
    {
      id: 9,
      title: 'Злочин і кара',
      author: 'Федір Достоєвський',
      year: 1866,
      genre: 'Класика',
    },
    {
      id: 10,
      title: 'Мобі Дік',
      author: 'Герман Мелвілл',
      year: 1851,
      genre: 'Пригодницький роман',
    },
    {
      id: 11,
      title: 'Великий Гетсбі',
      author: 'Френсіс Скотт Фіцджеральд',
      year: 1925,
      genre: 'Класика',
    },
    {
      id: 12,
      title: 'Гаррі Поттер і таємна кімната',
      author: 'Дж. К. Роулінг',
      year: 1998,
      genre: 'Фентезі',
    },
    {
      id: 13,
      title: 'Аліса в Країні Чудес',
      author: 'Льюїс Керролл',
      year: 1865,
      genre: 'Фентезі',
    },
    {
      id: 14,
      title: 'Франкенштейн',
      author: 'Мері Шеллі',
      year: 1818,
      genre: 'Готичний роман',
    },
  ],

  add(book) {
    book.id = this.books.length + 1;
    this.books.push(book);
  },

  update(id, book) {
    let index = this.books.findIndex(item => item.id == id);
    this.books[index] = book;
  },

  find(id) {
    let index = this.books.findIndex(item => item.id == id);
    return this.books[index];
  },

  remove(id) {
    let index = this.books.findIndex(item => item.id == id);
    this.books.splice(index, 1);
  },
};
