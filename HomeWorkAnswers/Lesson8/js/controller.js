import { books } from './books.js';

import { bookTemplate } from './template.js';


export function displayBooks(bookArray, containerId) {
    // const bookList = document.querySelector(containerId);

    // bookList.innerHTML = '';

    // bookArray.forEach(book => {
    //     const bookItem = document.createElement('div');
    //     bookItem.classList.add('book-item');

    //     const bookTitle = document.createElement('p');
    //     bookTitle.classList.add('book-title');
    //     bookTitle.textContent = book.title;

    //     const bookDetails = document.createElement('p');
    //     bookDetails.textContent = `Автор: ${book.author}, Написана: ${book.year}р., Жанр: ${book.genre}`;

    //     bookItem.appendChild(bookTitle);
    //     bookItem.appendChild(bookDetails);

    //     bookList.appendChild(bookItem);
    // });

    const rendered = Mustache.render(bookTemplate, { books: bookArray });
    const bookList = document.querySelector(containerId);

    bookList.innerHTML = rendered;
}