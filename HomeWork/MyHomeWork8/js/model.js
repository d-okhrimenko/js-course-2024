class book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}



let bookItems = {
    books: [],

    add(title, author, year, genre) {
        this.books.push(new book(title, author, year, genre));
    },

    remove(title) {
        const titleIndex = this.books.findIndex(index => index.title == title);
        this.books.splice(titleIndex, 1);
    }
}



bookItems.add('1984', 'Джордж Орвелл', 1949, "Антиутопія");
bookItems.add('Гаррі Поттер і філософський камінь', 'Дж. К. Роулінг', 1997, "Фентезі");
bookItems.add('Гра престолів', 'Джордж Р. Р. Мартін', 1996, "Фентезі");
bookItems.add('Старий і морe', 'Ернест Хемінгуей', 1952, "Пригодницький роман");
bookItems.add('Майстер і Маргарита', 'Михайло Булгаков', 1967, "Фантастика");



// bookItems.remove('1984');

