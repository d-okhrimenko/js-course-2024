class book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

let booksList = {
    books: [],

    add: function (title, author, year, genre) {
        this.books.push(new book(title, author, year, genre));
    },

    // remove: function (id) {
    //     const idIndex = this.card.findIndex(index => index.id == id);
    //     this.card.splice(idIndex, 1);
    // },

    booksListInfo: function () {
        for (let info of this.books) {
            displayInfo(info);
        }
    },

    // idInfo: function (id) {
    //     const info = this.card.find(index => index.id == id);
    //     displayInfo(info);
    // }
}

function displayInfo(info) {
    console.log('title: ' + info.title);
    console.log('author: ' + info.author);
    console.log('year: ' + info.year);
    console.log('genre: ' + info.genre);
    console.log('');
    console.log('');
};


booksList.add('1984', 'Джордж Орвелл', 1949, "Антиутопія");
booksList.add('Гаррі Поттер і філософський камінь', 'Дж. К. Роулінг', 1997, "Фентезі");
booksList.add('Гра престолів', 'Джордж Р. Р. Мартін', 1996, "Фентезі");
booksList.add('Старий і мор', 'Ернест Хемінгуей', 1952, "Пригодницький роман");
booksList.add('Майстер і Маргарита', 'Михайло Булгаков', 1967, "Фантастика");

// studentsCard.remove(4);

// studentsCard.idInfo(3);

booksList.booksListInfo();














