const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

function displayBooks(books) {
    const bookList = document.querySelector('#bookList');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Автор: ${book.author}`;

        const bookYear = document.createElement('p');
        bookYear.textContent = `Рік видання: ${book.year}`;

        const bookGenre = document.createElement('p');
        bookGenre.textContent = `Жанр: ${book.genre}`;

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookYear);
        bookDiv.appendChild(bookGenre);

        bookList.appendChild(bookDiv);
    });
}

displayBooks(books);
