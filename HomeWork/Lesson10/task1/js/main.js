import { validateBook } from './validation.js';

const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

const bookList = document.getElementById('bookList');
const addBookForm = document.getElementById('addBookForm');
const errorMessages = document.getElementById('errorMessages');

function renderBooks() {
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Автор: ${book.author}`;

        const yearElement = document.createElement('p');
        yearElement.textContent = `Год издания: ${book.year}`;

        const genreElement = document.createElement('p');
        genreElement.textContent = `Жанр: ${book.genre}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Редактировать';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editBook(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteBook(index));

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(yearElement);
        bookCard.appendChild(genreElement);
        bookCard.appendChild(editButton);
        bookCard.appendChild(deleteButton);

        bookList.appendChild(bookCard);
    });
}

function addBook(event) {
    event.preventDefault();

    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const yearInput = document.getElementById('yearInput');
    const genreInput = document.getElementById('genreInput');

    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        year: new Date(yearInput.value).getFullYear(), // Получаем только год
        genre: genreInput.value,
    };

    const validation = validateBook(newBook, books);
    if (validation.isValid) {
        books.push(newBook);
        renderBooks();

        titleInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
        genreInput.value = '';
    } else {
        alert(validation.message);
    }
}

function editBook(index) {
    const book = books[index];

    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const yearInput = document.getElementById('yearInput');
    const genreInput = document.getElementById('genreInput');

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = `${book.year}-01-01`; // Устанавливаем дату в формате YYYY-MM-DD
    genreInput.value = book.genre;

    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedBook = {
            title: titleInput.value,
            author: authorInput.value,
            year: new Date(yearInput.value).getFullYear(), // Получаем только год
            genre: genreInput.value,
        };

        const validation = validateBook(updatedBook, books);
        if (validation.isValid) {
            books[index] = updatedBook;
            renderBooks();

            titleInput.value = '';
            authorInput.value = '';
            yearInput.value = '';
            genreInput.value = '';
        } else {
            alert(validation.message);
        }
    }, { once: true });
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

addBookForm.addEventListener('submit', addBook);
renderBooks();