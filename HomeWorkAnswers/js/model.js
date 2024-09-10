const library = {
    books: [
        {
            id: 1,
            title: "Грокаємо алгоритми. Ілюстрований посібник для програмістів і допитливих",
            author: " Адітья Бхаргавал",
            year: 2024,
            genre: "Навчальна література",
        },

        {
            id: 2,
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949,
            genre: "Антиутопія",
        },
        {
            id: 3,
            title: "Навчитися вчитися. Як запустити свій мозок на повну",
            author: "Барбара Оклі",
            year: 2019,
            genre: "Навчальна література",
        },
        {
            id: 4,
            title: "Гаррі Поттер і філософський камінь",
            author: "Дж. К. Роулінг",
            year: 1997,
            genre: "Фентезі",
        },
        {
            id: 5,
            title: "Гра престолів",
            author: "Джордж Р. Р. Мартін",
            year: 1996,
            genre: "Фентезі",
        },
        {
            id: 6,
            title: "Старий і море",
            author: "Ернест Хемінгуей",
            year: 1952,
            genre: "Пригодницький роман",
        },
        {
            id: 7,
            title: "Автоматизація рутинних завдань за допомогою Python. Практичний посібник для початківців",
            author: "Ел Свейгарт",
            year: 2017,
            genre: "Навчальна література",
        },
    ],

    lastId() {
        const allIds = this.books.map((book) => book.id);
        console.log(allIds);

        return Math.max(...allIds);
    },

    add(book) {
        let newId = this.lastId() + 1;
        console.log(newId);
        book.id = newId;
        this.books.push(book);
    },

    remove(id) {
        let index = this.books.findIndex((book) => book.id == id);
        this.books.splice(index, 1);
    },

    find(id) {
        let index = this.books.findIndex((book) => book.id == id);
        return this.books[index];
    },

    update(id, book) {
        let index = this.books.findIndex((book) => book.id == id);
        this.books[index] = book;
    },
};
