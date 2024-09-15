const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

// Відображення книг
function displayBooks(bookArray) {
    const bookList = document.querySelector('#bookList');
    const deleteTitleSelect = document.querySelector('#deleteTitle');
    const editSelectTitle = document.querySelector('#editSelectTitle'); 

    bookList.innerHTML = '';
    deleteTitleSelect.innerHTML = '';
    editSelectTitle.innerHTML = ''; 

    bookArray.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('p');
        title.textContent = `Назва: ${book.title}`;

        const author = document.createElement('p');
        author.textContent = `Автор: ${book.author}`;

        const year = document.createElement('p');
        year.textContent = `Рік видання: ${book.year}`;

        const genre = document.createElement('p');
        genre.textContent = `Жанр: ${book.genre}`;

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(year);
        bookDiv.appendChild(genre);
        bookList.appendChild(bookDiv);

        // Додавання до списку видалення
        const deleteOption = document.createElement('option');
        deleteOption.value = book.title;
        deleteOption.textContent = book.title;
        deleteTitleSelect.appendChild(deleteOption);

        // Додавання до списку редагування
        const editOption = document.createElement('option');
        editOption.value = book.title;
        editOption.textContent = book.title;
        editSelectTitle.appendChild(editOption);
    });
}

// Додавання нової книги
document.querySelector('#addBookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = parseInt(document.querySelector('#year').value);
    const genre = document.querySelector('#genre').value;

    books.push({ title, author, year, genre });
    displayBooks(books);

    e.target.reset();
});

// Відображення даних обраної книги у формі редагування
document.querySelector('#editSelectTitle').addEventListener('change', (e) => {
    const selectedTitle = e.target.value;
    const book = books.find(book => book.title === selectedTitle);
    if (book) {
        document.querySelector('#editTitle').value = book.title;
        document.querySelector('#editAuthor').value = book.author;
        document.querySelector('#editYear').value = book.year;
        document.querySelector('#editGenre').value = book.genre;
    }
});

// Редагування книги
document.querySelector('#editBookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedTitle = document.querySelector('#editSelectTitle').value;
    const title = document.querySelector('#editTitle').value;
    const author = document.querySelector('#editAuthor').value;
    const year = parseInt(document.querySelector('#editYear').value);
    const genre = document.querySelector('#editGenre').value;

    const index = books.findIndex(book => book.title === selectedTitle);
    if (index !== -1) {
        books[index] = { title, author, year, genre };
        displayBooks(books);
    }

    e.target.reset();
});

// Видалення книги
document.querySelector('#deleteBookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#deleteTitle').value;

    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
        books.splice(index, 1);
        displayBooks(books);
    }

    e.target.reset();
});

displayBooks(books);