const bookObject = {
    bookCollection: [
        {
            id: 1,
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949,
            genre: "Антиутопія"
        },
        {
            id: 2,
            title: "Гаррі Поттер і філософський камінь",
            author: "Дж. К. Роулінг",
            year: 1997,
            genre: "Фентезі"
        },
        {
            id: 3,
            title: "Гра престолів",
            author: "Джордж Р. Р. Мартін",
            year: 1996,
            genre: "Фентезі"
        },
        {
            id: 4,
            title: "Старий і море",
            author: "Ернест Хемінгуей",
            year: 1952,
            genre: "Пригодницький роман"
        },
        {
            id: 5,
            title: "Майстер і Маргарита",
            author: "Михайло Булгаков",
            year: 1967,
            genre: "Фантастика"
        },
    ],

    getLastId() {
        return this.bookCollection.at(-1).id;
    },

    add(book) {
        lastId = this.getLastId();
        lastId++;
        book.id = lastId;
        this.bookCollection.push(book);
    },

    findBook(id) {
        return this.bookCollection.filter((b) => b.id === id)[0];
    },

    findBookByTitle(title) {
        return this.bookCollection.filter((b) => b.title === title)[0];
    },

    edit(id, book) {
        let editBook = this.findBook(id);
        book.id = editBook.id;
        this.bookCollection = this.bookCollection.map(b => b.id == editBook.id ? book : b)
    },

    remove(id) {
        this.bookCollection = this.bookCollection.filter((b) => b.id != id);
    }
}

