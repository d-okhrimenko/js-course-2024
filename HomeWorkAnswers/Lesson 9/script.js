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
books.push({ title, author, year, genre });
displayBooks();
document.querySelector('#bookForm').reset();
}

function editBook(index) {
const book = books[index];
document.querySelector('#title').value = book.title;
document.querySelector('#author').value = book.author;
document.querySelector('#year').value = book.year;
document.querySelector('#genre').value = book.genre;
document.querySelector('#bookForm').onsubmit = function(event) {
event.preventDefault();
books[index] = {
title: document.querySelector('#title').value,
author: document.querySelector('#author').value,
year: document.querySelector('#year').value,
genre: document.querySelector('#genre').value
};
displayBooks();
document.querySelector('#bookForm').reset();
document.querySelector('#bookForm').onsubmit = addBook;
};
}

function deleteBook(index) {
books.splice(index, 1);
displayBooks();
}

document.querySelector('#bookForm').onsubmit = addBook;
displayBooks();