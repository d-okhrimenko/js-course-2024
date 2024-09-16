let lastId = 0;

class Book {
    constructor(title, author, year, genre) {
        this.id = ++lastId;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const booksArray = {
    books: [
        new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"),
        new Book("1984", "George Orwell", 1949, "Dystopian"),
        new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance"),
        new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel"),
        new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Fantasy"),
        new Book("A Game of Thrones", "George R.R. Martin", 1996, "Fantasy"),
        new Book("The Old Man and the Sea", "Ernest Hemingway", 1952, "Adventure"),
        new Book("Brave New World", "Aldous Huxley", 1932, "Dystopian")
    ],
    add(book) {
        this.books.push(book);
    },
    delete(bookID) {
        let index = this.books.findIndex(book => book.id == bookID);
        this.books.splice(index, 1);
    },
    edit(bookID, book) {
        let index = this.books.findIndex(book => book.id == bookID);
        this.books[index] = book;
    },
    find(bookID) {
        let index = this.books.findIndex(book => book.id == bookID);
        return this.books[index];
    }
};