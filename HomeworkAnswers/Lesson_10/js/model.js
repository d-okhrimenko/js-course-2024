const booksList = {
    books: [
    { "id":"1", "title": "To Kill a Mockingbird", "author": "Harper Lee", "year": 1960, "genre": "Fiction" },
    { "id":"2", "title": "Pride and Prejudice", "author": "Jane Austen", "year": 1813, "genre": "Romance" },
    { "id":"3", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925, "genre": "Tragedy" },
    { "id":"4", "title": "Moby-Dick", "author": "Herman Melville", "year": 1851, "genre": "Adventure" },
    { "id":"5", "title": "War and Peace", "author": "Leo Tolstoy", "year": 1869, "genre": "Historical" }
    ],
    lastId: 5,

    add(book) {
        this.lastId++;
        book.id = this.lastId;
        this.books.push(book);
    },

    remove(id) {
        let index = this.books.findIndex(book => book.id == id);
        this.books.splice(index, 1);
    },

    update(id, book) {
        let index = this.books.findIndex(book => book.id == id);
        this.books[index] = book;
    },

    find(id) {
        let index = this.books.findIndex(book => book.id == id);
        return this.books[index];
    }
    
}