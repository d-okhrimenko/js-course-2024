const Library = {

    books: [
        { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" }
    ],

    addNewBook(bookName, bookAuthor, bookYear, bookGenre) {
        let lastId = this.books.at(-1).id;

        let newBook = {};
        newBook.id = ++lastId;
        newBook.title = bookName.value,
        newBook.author = bookAuthor.value,
        newBook.year = bookYear.value,
        newBook.genre = bookGenre.value
        this.books.push(newBook);
    },

    deleteBookById(id) {
        let bookIndex = this.books.findIndex(index => index.id == id);
        if (bookIndex != -1) {
            this.books.splice(bookIndex, 1)
        }
    },

    editBookById(id, bookName, bookAuthor, bookYear, bookGenre) {
        let editedBook = {};
        editedBook.title = bookName.value,
        editedBook.author = bookAuthor.value,
        editedBook.year = bookYear.value,
        editedBook.genre = bookGenre.value

        let bookIndex = this.books.findIndex(index => index.id == id);

        if (bookIndex != -1) {
            this.books.splice(bookIndex, 1, editedBook);
        }
    },

    findBookById(id) {
        let bookIndex = this.books.findIndex(index => index.id == id);
        return this.books[bookIndex];
    },

    findBookByName(bookTitle) {
        let foundedBook = this.books.find(book => book.title == bookTitle);
        return foundedBook;
    }
}