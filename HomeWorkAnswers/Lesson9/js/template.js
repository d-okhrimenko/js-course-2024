import { books } from './books.js';
// Шаблон списку книг
export const bookListTemplate = `
    <div id="bookList">
        {{#books}}
        <div class="book-item">
            <p class="book-title">{{title}}</p>
            <p>Автор: {{author}}, Рік видання: {{year}}р., Жанр: {{genre}}</p>
            <button data-index="{{index}}" class="edit-btn">Редагувати</button>
            <button data-index="{{index}}" class="delete-btn">Видалити</button>

            <!-- Форма редагування, яка з'являтиметься під книгою -->
            <form id="editBookForm-{{index}}" class="edit-form" style="display:none;">
                <input type="text" id="editTitle-{{index}}" placeholder="Назва книги" required>
                <input type="text" id="editAuthor-{{index}}" placeholder="Автор" required>
                <input type="number" id="editYear-{{index}}" placeholder="Рік видання" required>
                <input type="text" id="editGenre-{{index}}" placeholder="Жанр" required>
                <button data-index="{{index}}" type="submit">Зберегти зміни</button>
            </form>
        </div>
        {{/books}}
    </div>
`;

// Шаблон форми для додавання книги
export const addBookFormTemplate = `
    <form id="addBookForm">
        <input type="text" id="title" placeholder="Назва книги" required>
        <input type="text" id="author" placeholder="Автор" required>
        <input type="number" id="year" placeholder="Рік видання" required>
        <input type="text" id="genre" placeholder="Жанр" required>
        <button type="submit">Додати книгу</button>
    </form>
`;

// Шаблон форми для редагування книги
export const editBookFormTemplate = `
    <form id="editBookForm" style="display:none;">
        <input type="hidden" id="editIndex">
        <input type="text" id="editTitle" placeholder="Назва книги" required>
        <input type="text" id="editAuthor" placeholder="Автор" required>
        <input type="number" id="editYear" placeholder="Рік видання" required>
        <input type="text" id="editGenre" placeholder="Жанр" required>
        <button type="submit">Зберегти зміни</button>
    </form>
`;

// Функція для рендерингу форм
export function renderForms() {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = Mustache.render(addBookFormTemplate);

    const editFormContainer = document.getElementById('editFormContainer');
    editFormContainer.innerHTML = Mustache.render(editBookFormTemplate);
}
export function showEditForm(index) {
    const book = books[index];
    // Заповнюємо поля форми значеннями книги
    document.getElementById(`editTitle-${index}`).value = book.title;
    document.getElementById(`editAuthor-${index}`).value = book.author;
    document.getElementById(`editYear-${index}`).value = book.year;
    document.getElementById(`editGenre-${index}`).value = book.genre;

    // Ховаємо всі форми редагування
    document.querySelectorAll('.edit-form').forEach(form => {
        form.style.display = 'none';
    });

    // Показуємо тільки ту форму, яка відповідає конкретній книзі
    document.getElementById(`editBookForm-${index}`).style.display = 'block';
}