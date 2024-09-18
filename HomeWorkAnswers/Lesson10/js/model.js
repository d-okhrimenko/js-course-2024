export const library = {
    books: [
        { id: 1, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
        { id: 2, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
        { id: 3, title: "A Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "Fantasy" },
        { id: 4, title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, genre: "Adventure" },
        { id: 5, title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1967, genre: "Fantasy" },
        { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
        { id: 7, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" },
        { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" },
        { id: 9, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
        { id: 10, title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
        { id: 11, title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical Fiction" },
        { id: 12, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" },
        { id: 13, title: "The Divine Comedy", author: "Dante Alighieri", year: 1320, genre: "Epic Poetry" },
        { id: 14, title: "The Odyssey", author: "Homer", year: -700, genre: "Epic" },
        { id: 15, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "Psychological Fiction" },
        { id: 16, title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
        { id: 17, title: "Wuthering Heights", author: "Emily Brontë", year: 1847, genre: "Gothic Fiction" },
        { id: 18, title: "The Catch-22", author: "Joseph Heller", year: 1961, genre: "Satire" },
        { id: 19, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Romance" },
        { id: 20, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880, genre: "Philosophical Fiction" }
    ],

    lastId() {
        const lastElement = this.books[this.books.length - 1];
        const lastId = lastElement.id;
        return lastId;
    },

    add(book) {
        let lastId = this.lastId();
        book.id = ++lastId;
        this.books.push(book);
    },

    modify(id, book) {
        let element = this.books.findIndex(x => x.id === id);
        this.books[element] = book;
    },

    delete(id) {
        let element = this.books.findIndex(x => x.id === id);
        this.books.splice(element, 1);
    },

    find(id) {
        return this.books.find(x => x.id === id);
    },

    isDuplicate(title) {
        return this.books.some(existingBook =>
            existingBook.title.toLowerCase() === title.toLowerCase()
        );
    }
}
