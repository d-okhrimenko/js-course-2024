import { displayBooks, addBook, editBook } from './controller.js';

import { renderForms, showEditForm } from './template.js';

// Відображаємо початковий список книг і форми
displayBooks('#bookList');
renderForms();

// Додаємо слухач подій для форми додавання книги
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    addBook(title, author, year, genre);
    addBookForm.reset(); // Очищаємо форму
});

// Слухач подій для форми редагування книги
const editBookForm = document.getElementById('editBookForm');
editBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const index = document.getElementById('editIndex').value;
    const title = document.getElementById('editTitle').value;
    const author = document.getElementById('editAuthor').value;
    const year = document.getElementById('editYear').value;
    const genre = document.getElementById('editGenre').value;

    editBook(index, title, author, year, genre);
    editBookForm.style.display = 'none'; // Ховаємо форму редагування
});

// Додаємо слухачі подій для форми редагування
const bookListContainer = document.getElementById('bookList');
bookListContainer.addEventListener('submit', (event) => {
    if (event.target.matches('.edit-form')) {
        event.preventDefault();
        const index = event.target.querySelector('button[data-index]').getAttribute('data-index');
        const title = document.getElementById(`editTitle-${index}`).value;
        const author = document.getElementById(`editAuthor-${index}`).value;
        const year = document.getElementById(`editYear-${index}`).value;
        const genre = document.getElementById(`editGenre-${index}`).value;

        editBook(index, title, author, year, genre);
        event.target.style.display = 'none'; // Ховаємо форму редагування після збереження
    }
});
