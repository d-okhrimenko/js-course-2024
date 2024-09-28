const books = [
{ title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
{ title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
{ title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
{ title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
{ title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

function validateBookForm(book, books, isEdit = false) {
const errors = [];

if (!book.title || book.title.trim() === '') {
errors.push('Назва книги не повинна бути порожньою.');
} else if (!isEdit && books.some(b => b.title === book.title)) {
errors.push('Книга з такою назвою вже існує.');
}

if (!book.author || book.author.trim() === '') {
errors.push('Ім\'я автора не повинно бути порожнім.');
}

const currentYear = new Date().getFullYear();
if (!book.year) {
errors.push('Рік видання повинен бути вказаний.');
} else if (isNaN(book.year)) {
errors.push('Рік видання повинен бути числом.');
} else if (book.year < 1450 || book.year > currentYear) {
errors.push(`Рік видання повинен бути в діапазоні від 1450 до ${currentYear}.`);
}

if (!book.genre || book.genre.trim() === '') {
errors.push('Жанр не повинен бути порожнім.');
}

return errors;
}

function displayBooks() {
const bookList = document.querySelector('#bookList');
bookList.innerHTML = '';
books.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.className = "book-item";
bookItem.innerHTML = `
<h3>${book.title}</h3>
<p>Автор: ${book.author}</p>
<p>Рік видання: ${book.year}</p>
<p>Жанр: ${book.genre}</p>
<button onclick="editBook(${index})">Редагувати</button>
<button onclick="deleteBook(${index})">Видалити</button>
`;
bookList.appendChild(bookItem);
});
}

function addBook(event) {
event.preventDefault();
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const year = document.querySelector('#year').value;
const genre = document.querySelector('#genre').value;
const newBook = { title, author, year, genre };

const validationErrors = validateBookForm(newBook, books);
if (validationErrors.length > 0) {
displayValidationErrors(validationErrors);
return;
}

books.push(newBook);
displayBooks();
document.querySelector('#bookForm').reset();
clearValidationErrors();
}

function editBook(index) {
const book = books[index];
document.querySelector('#title').value = book.title;
document.querySelector('#author').value = book.author;
document.querySelector('#year').value = book.year;
document.querySelector('#genre').value = book.genre;
document.querySelector('#bookForm').onsubmit = function(event) {
event.preventDefault();
const updatedBook = {
title: document.querySelector('#title').value,
author: document.querySelector('#author').value,
year: document.querySelector('#year').value,
genre: document.querySelector('#genre').value
};

const validationErrors = validateBookForm(updatedBook, books, true);
if (validationErrors.length > 0) {
displayValidationErrors(validationErrors);
return;
}

books[index] = updatedBook;
displayBooks();
document.querySelector('#bookForm').reset();
document.querySelector('#bookForm').onsubmit = addBook;
clearValidationErrors();
};
}

function deleteBook(index) {
books.splice(index, 1);
displayBooks();
}

function displayValidationErrors(errors) {
const validationErrorsDiv = document.querySelector('#validationErrors');
validationErrorsDiv.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
}

function clearValidationErrors() {
document.querySelector('#validationErrors').innerHTML = '';
}

document.querySelector('#bookForm').onsubmit = addBook;
displayBooks();