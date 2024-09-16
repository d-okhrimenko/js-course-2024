import { bookListTemplate, showEditForm } from './template.js';
import { books } from './books.js';

// Функція для відображення книг
export function displayBooks(containerId) {
    const booksWithIndex = books.map((book, index) => ({ ...book, index }));
    const rendered = Mustache.render(bookListTemplate, { books: booksWithIndex });
    const bookListContainer = document.querySelector(containerId);
    bookListContainer.innerHTML = rendered;

    // Підключаємо кнопки "Редагувати" і "Видалити" до подій
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => button.addEventListener('click', handleEdit));

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => button.addEventListener('click', handleDelete));
}

// Функція для додавання книги
export function addBook(title, author, year, genre) {
    if (isDuplicateTitle(title)) {
        alert('Книга с такою назвою вже існує!');
        return;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1450 || year > currentYear) {
        alert(`Рік видання повинен бути між 1450 та ${currentYear}`);
        return;
    }

    books.push({ title, author, year: parseInt(year), genre });
    displayBooks('#bookList');
}

// Функція для редагування книги
export function editBook(index, title, author, year, genre) {
    if (isDuplicateTitle(title, index)) {
        alert('Книга с такою назвою вже існує!');
        return;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1450 || year > currentYear) {
        alert(`Рік видання повинен бути між 1450 та ${currentYear}`);
        return;
    }

    books[index] = { title, author, year: parseInt(year), genre };
    displayBooks('#bookList');
}

// Функція для перевірки дублікатів назв
function isDuplicateTitle(title, excludeIndex = -1) {
    return books.some((book, index) => book.title.toLowerCase() === title.toLowerCase() && index !== excludeIndex);
}

// Функція для видалення книги
export function deleteBook(index) {
    books.splice(index, 1);
    displayBooks('#bookList');
}

// Обробник події для редагування книги
function handleEdit(event) {
    const bookIndex = event.target.getAttribute('data-index');
    showEditForm(bookIndex);
}

// Обробник події для видалення книги
function handleDelete(event) {
    const bookIndex = event.target.getAttribute('data-index');
    deleteBook(bookIndex);
}