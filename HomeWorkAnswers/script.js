class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}

const books = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"),
    new Book("1984", "George Orwell", 1949, "Dystopian"),
    new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel"),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Fantasy"),
    new Book("A Game of Thrones", "George R.R. Martin", 1996, "Fantasy"),
    new Book("The Old Man and the Sea", "Ernest Hemingway", 1952, "Adventure"),
    new Book("Brave New World", "Aldous Huxley", 1932, "Dystopian")
];

function displayBooks() {
    const bookList = document.querySelector("#bookList");
    bookList.innerText = ''; 

    books.forEach((book) => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        const title = document.createElement('p');
        const titleLabel = document.createElement('span');
        titleLabel.innerText = 'Title: ';
        titleLabel.style.fontWeight = 'bold';
        title.appendChild(titleLabel);
        title.appendChild(document.createTextNode(book.title));

        const author = document.createElement('p');
        const authorLabel = document.createElement('span');
        authorLabel.innerText = 'Author: ';
        authorLabel.style.fontWeight = 'bold';
        author.appendChild(authorLabel);
        author.appendChild(document.createTextNode(book.author));

        const year = document.createElement('p');
        const yearLabel = document.createElement('span');
        yearLabel.innerText = 'Year: ';
        yearLabel.style.fontWeight = 'bold';
        year.appendChild(yearLabel);
        year.appendChild(document.createTextNode(book.year));

        const genre = document.createElement('p');
        const genreLabel = document.createElement('span');
        genreLabel.innerText = 'Genre: ';
        genreLabel.style.fontWeight = 'bold';
        genre.appendChild(genreLabel);
        genre.appendChild(document.createTextNode(book.genre));

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(genre);

        bookList.appendChild(bookContainer);
    });
}

