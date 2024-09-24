const booksList = {
    books: [
      {
        "id":1,
        "title": "1984",
        "author": "Джордж Орвелл",
        "year": "1949",
        "genre": "Антиутопія",
      },
      {
        "id":2,
        "title": "Трилер на лінії розмежування",
        "author": "Джон Грішем",
        "year": "2018",
        "genre": "Трилер",
      },
      {
        "id":3,
        "title": "Нічний адмін",
        "author": "Джон Ле Карре",
        "year": "2016",
        "genre": "Шпигунський роман",
      },
      {
        "id":4,
        "title": "Шовкопряд",
        "author": "Роберт Гелбрейт",
        "year": "2014",
        "genre": "Детектив",
      },
      {
        "id":5,
        "title": "Гра престолів",
        "author": "Джордж Р. Р. Мартін",
        "year": "1996",
        "genre": "Фентезі",
      },
      {
        "id":6,
        "title": "Дівчина у потягу",
        "author": "Пола Гокінз",
        "year": "2015",
        "genre": "Трилер",
      },
      {
        "id":7,
        "title": "Коротка історія семи вбивств",
        "author": "Марлон Джеймс",
        "year": "2014",
        "genre": "Історичний роман",
      },
      {
        "id":8,
        "title": "Місто дівчат",
        "author": "Елізабет Гілберт",
        "year": "2019",
        "genre": "Роман",
      },
      {
        "id":9,
        "title": "Звіяні вітром",
        "author": "Маргарет Мітчелл",
        "year":"1936",
        "genre": "Історичний роман",
      },
      {
        "id":10,
        "title": "Дюна",
        "author": "Френк Герберт",
        "year": "1965",
        "genre": "Фантастика",
      },
      {
        "id":11,
        "title": "Гаррі Поттер і філософський камінь",
        "author": "Дж. К. Ролінґ",
        "year": '1997',
        "genre": "Фентезі",
      },
      {
        "id":12,
        "title": "Володар перснів: Братство персня",
        "author": "Дж. Р. Р. Толкін",
        "year": "1954",
        "genre": "Фентезі",
      },
      {
        "id":13,
        "title": "Гра престолів",
        "author": "Джордж Р. Р. Мартін",
        "year": "1996",
        "genre": "Фентезі",
      },
      {
        "id":14,
        "title": "Хроніки Нарнії: Лев, чаклунка та шафа",
        "author": "Клайв Стейплз Льюїс",
        "year": "1950",
        "genre": "Фентезі",
      },
      {
        "id":15,
        "title": "Жорстокий принц",
        "author": "Голлі Блек",
        "year": "2018",
        "genre": "Фентезі",
      },
      {
        "id":16,
        "title": "Маленький принц",
        "author": "Антуан де Сент-Екзюпері",
        "year": "1943",
        "genre": "Казка",
      },
      {
        "id": 17,
        "title": "Великий Гетсбі",
        "author": "Френсіс Скотт Фіцджеральд",
        "year": "1925",
        "genre": "Класика",
      },
      {
        "id": 18,
        "title": "Алхімік",
        "author": "Пауло Коельо",
        "year": "1988",
        "genre": "Філософський роман",
      },
      {
       "id": 19,
       "title": "Місто кісток",
       "author": "Кассандра Клер",
       "year": "2007",
       "genre": "Фентезі"
      },
      {
        "id": 20,
        "title": "Сто років самотності",
        "author": "Габріель Гарсія Маркес",
        "year": 1967,
        "genre": "Магічний реалізм"
      }
    ],
    lastId: 20,
    
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
      let index = this.books.findIndex((x) => (x.id == id));
      this.books[index] = book;
    }, 
    find(id) {
      let index = this.books.findIndex(x => x.id == id);
      return this.books[index];
    }
  };
  