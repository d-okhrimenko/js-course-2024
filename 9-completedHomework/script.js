const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

function displayBooks() {
    const bookList = document.querySelector('#bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
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

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('book-actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Редагувати';
        editButton.onclick = () => editBook(index);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = () => deleteBook(index);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookYear);
        bookDiv.appendChild(bookGenre);
        bookDiv.appendChild(buttonContainer);

        bookList.appendChild(bookDiv);
    });
}

document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const year = document.getElementById('bookYear').value;
    const genre = document.getElementById('bookGenre').value;
    const index = document.getElementById('bookIndex').value;

    if (index === '') {
        books.push({ title, author, year, genre });
    } else {
        books[index] = { title, author, year, genre };
    }

    document.getElementById('bookForm').reset();
    document.getElementById('bookIndex').value = '';

    displayBooks();
});

function editBook(index) {
    const book = books[index];
    document.getElementById('bookTitle').value = book.title;
    document.getElementById('bookAuthor').value = book.author;
    document.getElementById('bookYear').value = book.year;
    document.getElementById('bookGenre').value = book.genre;
    document.getElementById('bookIndex').value = index;
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

displayBooks();
