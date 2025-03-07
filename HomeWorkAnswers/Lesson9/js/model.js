const bookLibrary = {
    books: [
        { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    ],

    getById(id) {
        return this.books.find(book => book.id === id);
    },

    addBook(book) {
        book.id = this.books[this.books.length - 1].id + 1;
        this.books.push(book);
    },

    deleteBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
    },

    editBook(id, book) {
        const index = this.books.findIndex(book => book.id === id);
        this.books[index] = book;
    }
}
