const Model = {
  books: [
    { id: 1, title: "Кобзар", author: "Тарас Шевченко", year: 1840, genre: "Поезія" },
    { id: 2, title: "Лісова пісня", author: "Леся Українка", year: 1911, genre: "Драма-феєрія" },
    { id: 3, title: "Тигролови", author: "Іван Багряний", year: 1944, genre: "Пригодницький роман" },
    { id: 4, title: "Місто", author: "Валер'ян Підмогильний", year: 1928, genre: "Урбаністичний роман" },
    { id: 5, title: "Ворошиловград", author: "Сергій Жадан", year: 2010, genre: "Сучасна проза" },
    { id: 6, title: "Енеїда", author: "Іван Котляревський", year: 1798, genre: "Бурлескно-травестійна поема" },
    { id: 7, title: "Захар Беркут", author: "Іван Франко", year: 1883, genre: "Історична повість" },
    { id: 8, title: "Чорна рада", author: "Пантелеймон Куліш", year: 1857, genre: "Історичний роман" },
    { id: 9, title: "Маруся Чурай", author: "Ліна Костенко", year: 1979, genre: "Історичний роман у віршах" },
    { id: 10, title: "Собор", author: "Олесь Гончар", year: 1968, genre: "Роман" },
    { id: 11, title: "Тореадори з Васюківки", author: "Всеволод Нестайко", year: 1973, genre: "Дитяча література" },
    { id: 12, title: "Зачарована Десна", author: "Олександр Довженко", year: 1956, genre: "Автобіографічна кіноповість" },
    { id: 13, title: "Мальви", author: "Роман Іваничук", year: 1968, genre: "Історичний роман" },
    { id: 14, title: "Кайдашева сім'я", author: "Іван Нечуй-Левицький", year: 1879, genre: "Соціально-побутова повість" },
    { id: 15, title: "Сад Гетсиманський", author: "Іван Багряний", year: 1950, genre: "Роман" },
    { id: 16, title: "Земля", author: "Ольга Кобилянська", year: 1902, genre: "Соціально-психологічна повість" },
    { id: 17, title: "Остання любов Асури Махараджа", author: "Любко Дереш", year: 2013, genre: "Психологічний роман" },
    { id: 18, title: "Солодка Даруся", author: "Марія Матіос", year: 2004, genre: "Драма на три життя" },
    { id: 19, title: "Чорний ворон", author: "Василь Шкляр", year: 2009, genre: "Історичний роман" },
    { id: 20, title: "Польові дослідження з українського сексу", author: "Оксана Забужко", year: 1996, genre: "Феміністичний роман" }
  ],

  lastId: 20,

  findBookIndex(id) {
    return this.books.findIndex(book => book.id === id);
  },

  add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.unshift(book);
  },

  remove(id) {
    const index = this.findBookIndex(id);
    this.books.splice(index, 1);
  },

  update(id, updatedBook) {
    const index = this.findBookIndex(id);
    this.books[index] = { ...this.books[index], ...updatedBook, id };
  },

  find(id) {
    return this.books.find(book => book.id === id);
  }
}